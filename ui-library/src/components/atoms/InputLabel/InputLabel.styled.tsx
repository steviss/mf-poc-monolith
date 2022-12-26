import styled from 'styled-components'

import { InputLabelProps } from './InputLabel.interface'

export const InputLabelStyled = styled.label<InputLabelProps>`
  display: flex;
  flex-direction: column;
  background-color: white;
  font-size: 1.25rem;
  color: black;
  & > span {
    padding: 0.5rem 0.25rem;
  }
`
