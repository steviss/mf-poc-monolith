import React, { ForwardRefRenderFunction, forwardRef } from 'react'

import { ButtonProps } from './Button.interface'
import { ButtonStyled } from './Button.styled'

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (props, ref) => {
  return <ButtonStyled innerRef={ref} {...props} />
}

export default forwardRef(Button)
