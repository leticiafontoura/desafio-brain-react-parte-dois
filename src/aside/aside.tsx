import DarkLogo from './assets/DarkLogo.png'
import FileIcon from './assets/fileIcon.png'
import styled, { css } from 'styled-components/macro'

type FilesType = {
  id: string
  name: string
  content: string
  active: boolean
  status: 'editing' | 'saving' | 'saved'
}

type ImgProps = {
  src: string,
  alt: string
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
        <ImgLogo src={DarkLogo} alt='dark logo' />
        <Heading>
          Arquivos
        </Heading>
      </AsideHeader>
      <AsideButton><span>+</span> Adicionar arquivo</AsideButton>
      {Files.map((file) => {
        return (
          <ListItems key={file.id}>
            <ListA href='/'><ImgIcon src={FileIcon} alt='' />{file.name}</ListA>
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
    width: 23%;
    height: 100%;
    padding: 32px;
  `}
`

const ImgLogo = styled.img<ImgProps>`
  display: block;
  margin: 0 auto 65px auto;
`

const ImgIcon = styled.img<ImgProps>`
  padding-right: 15px;
  vertical-align: sub;
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
      width: 25px;
      border-top: 2px solid ${theme.colors.primary};
      position: absolute;
      top: 160px;
      left: 32px;
    }

    &::after {
      content: "";
      width: 164px;
      border-top: 2px solid ${theme.colors.primary};
      position: absolute;
      top: 160px;
      left: 132px;
    }
  `}
`

const ListItems = styled.li`
  ${({ theme }) => css`
    list-style-type: none;
    color: ${theme.colors.white};
    padding: 10px 15px;
    border-radius: 6px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
      color: ${theme.colors.white};
    }
  `
  }
`
const ListA = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    font-size: 1.6rem;
    color: rgba(255, 255, 255, 0.65);

    &:visited {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.65);
    }

    &:hover {
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
    position: absolute;
    left: 265px;
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
    margin: 34px auto;
    display: block;
    padding: 10px 0;
    width: 100%;
    cursor: pointer;

    & span {
      font-size: 1.9rem;
    }
  `
  }
`

export { Aside }
