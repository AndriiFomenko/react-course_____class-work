export type FormControlType =
  | 'input'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'date'

export type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'date'
  | 'search'
  | (string & {})

export interface ControlOptionInterface {
  key: string
  value: string
}

export interface BaseFormControlProps {
  label: string
  name: string
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export interface FormikControlProps extends BaseFormControlProps {
  control: FormControlType
  type?: InputType
  placeholder?: string
  autoComplete?: string
  rows?: number
  options?: ControlOptionInterface[]
}
