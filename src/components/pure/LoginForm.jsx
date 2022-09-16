import { ErrorMessage, Field, Form, Formik } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import * as Yup from 'yup'
//import { Redirect } from 'react-router-dom';

const loginSchema = Yup.object().shape(
  {
    email: Yup.string()
      .email('Invalid email format')
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
  }
)

const LoginForm = ({ logged, fetching, onLogin }) => {
    const initialCredentials = {
      email: '',
      password: ''
    }
  

    return (
      <Formik
        // *** Initial values that the form will take
        initialValues={initialCredentials}
        // *** Yup validation schema ***
        validationSchema={loginSchema}
        // *** onSubmit Event
        onSubmit={async (values) => {
          onLogin(values.email, values.password)
        }}
      >

        {/* We obtain props from formik */}
        {({ values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="jane@acme.com" />
            
            {/* Email errors */}
            {
              errors.email && touched.email && (
                <ErrorMessage component="div" name="email" />
              )
            }
            
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              type="password"
              name="password"
              placeholder="password"
            />
            
            {/* Password errors */}
            {
              errors.password && touched.password && (
                <ErrorMessage component="div" name="password" />
              )
            }
            <button type="submit">Login</button>
            {fetching ? (<p>LOADING...</p>) : null}
            {isSubmitting ? (<p>Login your credential...</p>) : null}
          </Form>
        )}
      </Formik>
    )
  }


LoginForm.propTypes = {
  logged: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired

};


export default LoginForm;

