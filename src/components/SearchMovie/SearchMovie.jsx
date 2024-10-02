import { Formik, Form, Field } from 'formik'
import React from 'react'

const SearchMovie = ({handeChangeQuery}) => {
    const initialValues = {
        query: '',
    };
    const handleSubmit = values => {
        console.log(values);
        handeChangeQuery(values.query)
    };


  return (
      <div>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                  <Field name='query' >                   
                  </Field>
                  <button type='submit'>Search</button>
            </Form>
        </Formik>
    </div>
  )
}

export default SearchMovie

