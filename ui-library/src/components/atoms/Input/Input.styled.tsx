import styled from 'styled-components'

import { InputProps } from './Input.interface'

export const InputStyled = styled.input<InputProps>`
  display: flex;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
  background-color: white;
  color: black;
  padding: 0.75rem 0.5rem;
  transition: border-color 0.2s ease-in-out;
  outline: none;
  &:hover {
    border-color: #666;
  }
  &:active,
  &:focus {
    border-color: #333;
  }
`
