import React, { ForwardRefRenderFunction, forwardRef } from 'react'

import { InputProps } from './Input.interface'
import { InputStyled } from './Input.styled'

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (props, ref) => {
  return <InputStyled ref={ref} {...props} />
}

export default forwardRef(Input)
