import Checkbox, { type CheckboxProps } from './Checkbox'
import DatePicker, { type DatePickerProps } from './DatePicker'
import Input from './Input'
import Radio, { type RadioProps } from './Radio'
import Select, { type SelectProps } from './Select'
import Textarea from './Textarea'
import type { FormikControlProps } from '../../types'

export type {
  BaseFormControlProps,
  ControlOptionInterface,
  FormControlType,
  FormikControlProps,
  InputType
} from '../../types'

const FormikControl = ({ control, ...rest }: FormikControlProps) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...(rest as SelectProps)} />
    case 'radio':
      return <Radio {...(rest as RadioProps)} />
    case 'checkbox':
      return <Checkbox {...(rest as CheckboxProps)} />
    case 'date':
      return <DatePicker {...(rest as DatePickerProps)} />
    default:
      return null
  }
}

export default FormikControl
