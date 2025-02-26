import css from "./FormBooking.module.css"
import { Formik, Form, Field } from "formik"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";

const FormBooking = () => {

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Minimum 2 characters")
    .max(50, "Maximum 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  date: Yup.date()
    .required("Please select a booking date")
    .nullable(),
  coment: Yup.string()
    .max(200, "Maximum 200 characters"),
});


const DateInput = ({ field, form }) => {
  return (
    <DatePicker
      {...field}
      selected={field.value}
      onChange={(date) => form.setFieldValue(field.name, date)}
        dateFormat="dd/MM/YYYY"
      placeholderText="Booking date*"
      className={css.inputBooking}
    />
  );
};

const initialValues = {
    name: '',
    email: '',
    password: '',
    date: null,
    coment: '',
  };

  return (
      <>
          <div className={css.boxForm}>
              <h3 className={css.title}>Book your campervan now</h3>
              <p className={css.text}>Stay connected! We are always ready to help you.</p>
            <Formik initialValues={initialValues}
                  onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}>
            <Form className={css.formList}>
                <label className={css.labelInput}>
                    <Field className={css.inputBooking} type="text" name="name" placeholder="Name*" />     
                </label>
                <label className={css.labelInput}>
                    <Field className={css.inputBooking} type="email" name="email" placeholder="Email*"/>   
                </label>
                <label className={css.labelInput}>
                <Field name="date" component={DateInput} />
                </label> 
                <label className={css.labelInput}>
                    <Field className={css.inputBookingComment} type="text" name="coment" placeholder="Comment" />     
                </label>
                    <button type="submit" className={css.btnSend}>Send</button>
                </Form>
            </Formik>      
        </div>

    </>
  );
};


export default FormBooking;
