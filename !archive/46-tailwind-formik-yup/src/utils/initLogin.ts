import { object, string } from 'yup'

export interface LoginFormValues {
  email: string
  password: string
}

export const initialValues: LoginFormValues = {
  email: '',
  password: ''
}

export const validationSchema = object({
  email: string()
    .required("Електронна пошта обов'язкова")
    .email('Некоректний формат email'),
  password: string()
    .required("Пароль обов'язковий")
    .min(6, 'Пароль повинен містити щонайменше 6 символів')
})
