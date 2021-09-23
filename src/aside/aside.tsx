import DarkLogo from './assets/DarkLogo.png'
import styled, { css } from 'styled-components/macro'

interface FilesType {
  id: string
  name: string
  content: string
  active: boolean
  status: 'editing' | 'saving' | 'saved'
}

const Files: FilesType[] = [
  {
    id: '1',
    name: 'Lala',
    content: 'Oi',
    active: false,
    status: 'saved',
  },
  {
    id: '2',
    name: 'Lala2',
    content: 'Oi2',
    active: false,
    status: 'saved',
  },
]

function Aside () {
  return (
    <AsideMenu>
      <img src={DarkLogo} alt='dark logo' />
      {Files.map((file) => {
        return (
          <ListItems key={file.id}>
            <ListA href='/'>{file.content}</ListA>
            <button>x</button>
          </ListItems>
        )
      })}
    </AsideMenu>
  )
}

const AsideMenu = styled.aside`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    width: 300px;
  `}
`

const ListItems = styled.li`
  ${({ theme }) => css`
    list-style-type: none;
    color: ${theme.colors.white}
  `
  }
`
const ListA = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    font-size: 2rem;
    color: ${theme.colors.white};

    &:visited {
      text-decoration: none;
      color: ${theme.colors.white};
    }
  `
  }
`

export { Aside }
