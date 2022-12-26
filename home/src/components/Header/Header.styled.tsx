import styled from 'styled-components'

export const HeaderStyled = styled.header`
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  background-color: #0074d9;
  color: white;
  & > ul {
    display: flex;
    list-style: none;
  }
  & > ul > li {
    padding: 0.25rem;
  }
  & > ul > li > a {
    text-decoration: none;
    color: white;
    &:hover {
      text-decoration: underline;
      color: #7fdbff;
    }
  }
`
