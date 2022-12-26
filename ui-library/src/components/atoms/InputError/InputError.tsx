import React from 'react'

import { InputErrorProps } from './InputError.interface'
import { InputErrorStyled } from './InputError.styled'

const InputError: React.FC<InputErrorProps> = ({ errorMessage }) => {
  return (
    <InputErrorStyled>
      <span>{errorMessage}</span>
    </InputErrorStyled>
  )
}

export default InputError
