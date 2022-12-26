import styled from 'styled-components'

export const InputErrorStyled = styled.div`
  position: absolute;
  bottom: 0.25rem;
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  color: red;
  z-index: 50;
  & > span {
    &:empty {
      opacity: 0;
      transform: translateY(-100%);
    }
    padding: 0.25rem 0.25rem;
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  }
`
