import styled, { css } from 'styled-components/macro'
import { Aside } from 'aside'
import { Editor } from 'editor'

function App () {
  return (
    <Main>
      <Aside />
      <Editor />
    </Main>

  )
}

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    background-color: ${theme.colors.lightBlack}
  `}`

export const Main = styled.main`
  display: flex;
  height: 1024px;
`

export { App }
