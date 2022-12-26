import React, { ForwardRefRenderFunction, forwardRef } from 'react'

import { Input, InputError, InputLabel } from 'src/components/atoms'

import { InputFieldProps } from './InputField.interface'
import { InputFieldStyled } from './InputField.styled'

const InputField: ForwardRefRenderFunction<HTMLInputElement, InputFieldProps> = ({ labelProps, errorMessage, label, ...props }, ref) => {
  return (
    <InputFieldStyled>
      <InputLabel htmlFor={props.id} {...labelProps} label={label} />
      <Input ref={ref} {...props} />
      <InputError errorMessage={errorMessage} />
    </InputFieldStyled>
  )
}

export default forwardRef(InputField)
