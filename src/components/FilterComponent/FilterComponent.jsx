import { Formik, Form, Field } from 'formik'
import css from './FilterComponent.module.css'

const FilterComponent = () => {

    const initialValues = {
        query: '',
    };

  return (
    <>
        <div>
        <Formik initialValues={initialValues}>
              <Form>
                  <Field name='query' className={css.input} >                   
                  </Field>
                  <button type='submit'>Search</button>
            </Form>
              </Formik>
              <p>Filters</p>
              <h3>Vehicle equipment</h3>
        </div>
    </>
  )
}

export default FilterComponent