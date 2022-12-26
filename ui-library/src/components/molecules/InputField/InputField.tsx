import React from 'react'

import { Input, InputError, InputLabel } from 'src/components/atoms'

import { InputFieldProps } from './InputField.interface'
import { InputFieldStyled } from './InputField.styled'

const InputField: React.FC<InputFieldProps> = ({ labelProps, errorMessage, label, ...props }) => {
  return (
    <InputFieldStyled>
      <InputLabel {...labelProps} label={label} />
      <Input {...props} />
      <InputError errorMessage={errorMessage} />
    </InputFieldStyled>
  )
}

export default InputField
