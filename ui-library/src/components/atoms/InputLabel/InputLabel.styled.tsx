import styled from 'styled-components'

import { InputLabelProps } from './InputLabel.interface'

export const InputLabelStyled = styled.label<InputLabelProps>`
  display: flex;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  color: black;
  padding: 0.75rem 1.5rem;
  transition: border-color 0.2s ease-in-out;
  box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.5);
  &:hover {
    border-color: #666;
  }
`
