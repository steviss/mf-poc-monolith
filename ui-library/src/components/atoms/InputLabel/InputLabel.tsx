import React from 'react'

import { InputLabelProps } from './InputLabel.interface'
import { InputLabelStyled } from './InputLabel.styled'

const InputLabel: React.FC<InputLabelProps> = ({ label, children, ...props }) => {
  return (
    <InputLabelStyled {...props}>
      <span>{label}</span>
      {children}
    </InputLabelStyled>
  )
}

export default InputLabel
