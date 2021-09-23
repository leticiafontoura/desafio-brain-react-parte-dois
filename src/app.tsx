import styled, { css } from 'styled-components/macro'

function App () {
  return (
    <Title>Oi</Title>
  )
}

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    background-color: ${theme.colors.lightBlack}
  `}`

export { App }
