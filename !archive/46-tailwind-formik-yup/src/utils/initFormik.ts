import { array, object, string } from 'yup'

export * from './formOptions'

export interface FormValues {
  email: string
  description: string
  select: string
  radioOption: string
  checkboxOption: string[]
  birthDate: string
}

export const initialValues: FormValues = {
  email: '',
  description: '',
  select: '',
  radioOption: '',
  checkboxOption: [],
  birthDate: ''
}

export const validationSchema = object({
  email: string().required("Електронна пошта обов'язкова").email('Некоректний формат email'),
  description: string()
    .required("Опис обов'язковий")
    .min(10, 'Опис повинен містити щонайменше 10 символів'),
  select: string().required('Будь ласка, оберіть тему звернення'),
  radioOption: string().required("Будь ласка, оберіть спосіб зв'язку"),
  checkboxOption: array().min(1, 'Оберіть щонайменше один напрямок'),
  birthDate: string().required('Будь ласка, вкажіть бажану дату')
})
