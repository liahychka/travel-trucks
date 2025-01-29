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
          <div>
              <h3>Book your campervan now</h3>
              <p>Stay connected! We are always ready to help you.</p>
            <Formik initialValues={initialValues}
                  onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}>
            <Form>
                <label>
                    <Field className={css.inputBooking} type="text" name="name" placeholder="Name*" />     
                </label>
                <label>
                    <Field className={css.inputBooking} type="email" name="email" placeholder="Email*"/>   
                </label>
                <label>
                <Field name="date" component={DateInput} />
                </label> 
                <label>
                    <Field className={css.inputBooking} type="text" name="coment" placeholder="Coment" />     
                </label>
                    <button type="submit">Send</button>
                </Form>
            </Formik>      
        </div>

    </>
  );
};


export default FormBooking;
