import { Form, Formik } from 'formik'
import { handleSubmit, initialValues, randomSuffix, validationSchema } from '../utils/initFormik'
import FormField from './FormField'

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnMount={true}
      validateOnChange={true}
    >
      {({ isValid, errors }) => (
        <Form>
          <FormField
            id={`username-${randomSuffix()}`}
            label="Username"
            name="username"
            placeholder="Enter your username"
            successMessage="Username is valid"
            errorMessage={errors.username}
          />
          <FormField
            id={`password-${randomSuffix()}`}
            label="Password"
            name="password"
            placeholder="Enter your password"
            successMessage="Password is valid"
            errorMessage={errors.password}
            type="password"
          />
          <button type="submit" disabled={!isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
