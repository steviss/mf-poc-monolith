import { InputErrorProps, InputLabelProps, InputProps } from 'src/components/atoms'

export type InputFieldProps = InputProps &
  InputErrorProps & {
    labelProps?: InputLabelProps
    error?: boolean
  }
