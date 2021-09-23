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
    name: 'Lala.md',
    content: 'Oi',
    active: false,
    status: 'saved',
  },
  {
    id: '2',
    name: 'Lala2.md',
    content: 'Oi2',
    active: false,
    status: 'saved',
  },
]

function Aside () {
  return (
    <AsideMenu>
      <AsideHeader>
        <img src={DarkLogo} alt='dark logo' />
        <Heading>
          Arquivos
        </Heading>
      </AsideHeader>
      <AsideButton><span>+</span> Adicionar arquivo</AsideButton>
      {Files.map((file) => {
        return (
          <ListItems key={file.id}>
            <ListA href='/'>{file.name}</ListA>
            <ListItemButton>x</ListItemButton>
          </ListItems>
        )
      })}
    </AsideMenu>
  )
}

const AsideMenu = styled.aside`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    width: 332px;
  `}
`

const AsideHeader = styled.header``

const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.white};
    padding-left: 30px;
    font-weight: 500;

    &::before {
      content: "";
      width: 13px;
      border-top: 2px solid ${theme.colors.primary};
      position: absolute;
      top: 77px;
      left: 7px;
    }

    &::after {
      content: "";
      width: 178px;
      border-top: 2px solid ${theme.colors.primary};
      position: absolute;
      top: 77px;
      left: 110px;
    }
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
    font-size: 1.6rem;
    color: ${theme.colors.white};

    &:visited {
      text-decoration: none;
      color: ${theme.colors.white};
    }
  `
  }
`

const ListItemButton = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    color: ${theme.colors.white};
    border: 0;
    font-size: 2rem;
    cursor: pointer;
  `
  }
`

const AsideButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.lightBlack};
    font-size: 1.3rem;
    border: 0;
    border-radius: 3px;
    margin: 0 32px;
    padding: 10px 0;
    width: 268px;
    cursor: pointer;

    & span {
      font-size: 1.9rem;
    }
  `
  }
`

export { Aside }
