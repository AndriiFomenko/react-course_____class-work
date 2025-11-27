interface FormInputProps {
  id: string
  label: string
  type?: string
  placeholder?: string
  name: string
}

const FormInput = ({
  id,
  label,
  type = 'text',
  placeholder,
  name
}: FormInputProps) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} name={name} />
    </div>
  )
}

export default FormInput
