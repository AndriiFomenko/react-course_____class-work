import { ErrorMessage, Field } from 'formik'
import SuccessMessage from './SuccessMessage'

interface FormFieldProps {
  id: string
  label: string
  name: string
  successMessage: string
  type?: string
  autoComplete?: string
  errorMessage?: string
  placeholder?: string
}

const FormField = ({
  id,
  label,
  name,
  successMessage,
  type = 'text',
  autoComplete = 'off',
  errorMessage = '',
  placeholder = 'Enter your value'
}: FormFieldProps) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <Field id={id} name={name} type={type} placeholder={placeholder} autoComplete={autoComplete} />
      <ErrorMessage name={name} component="div" className="error" />
      <SuccessMessage successMessage={successMessage} errorMessage={errorMessage} />
    </div>
  )
}

export default FormField
