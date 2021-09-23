import styled, { css } from 'styled-components/macro'
import { Aside } from 'aside'

function App () {
  return (
    <Aside />
  )
}

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    background-color: ${theme.colors.lightBlack}
  `}`

export { App }
