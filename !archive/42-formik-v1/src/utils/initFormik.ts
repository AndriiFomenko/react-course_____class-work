import { object, string } from 'yup'

export interface FormValues {
  username: string
  password: string
}

export const initialValues: FormValues = {
  username: '',
  password: '1234'
}

export const validationSchema = object({
  username: string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long')
    .max(20, 'Username must be at most 20 characters long'),
  password: string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .max(20, 'Password must be at most 20 characters long')
})

export const handleSubmit = (values: FormValues) => {
  console.log(values)
}

export const randomSuffix = () => {
  return Math.random().toString(36).substring(2, 15)
}
