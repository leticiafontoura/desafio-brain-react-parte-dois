import styled from 'styled-components/macro'
import FileIcon from './assets/FileInput.png'

function Editor () {
  return (
    <>
      <Section>
        <TitleArea>
          <Img src={FileIcon} alt='file icon' />
          <Input />
        </TitleArea>
        <MarkeeArea>
          <TextArea />
          <VerticalRule />
          <OutputArea />
        </MarkeeArea>
      </Section>
    </>
  )
}

type ImgProps = {
  src: string,
  alt: string,
}

const Section = styled.section`
  height: 100%;
  width: 77%;
`

const Img = styled.img<ImgProps>`
  width: 26px;
  vertical-align: bottom;
  margin-right: 20px;

`

const TitleArea = styled.div`
  height: 9%;
  padding-left: 20px;
`

const MarkeeArea = styled.div`
  width: 100%;
  display: flex;
  height: 91%;
  padding-left: 20px;
`

const VerticalRule = styled.div`
  height: 90%;
  width: 2px;
  background-color: rgba(30, 41, 59, 0.12);
  margin-top: 2.5%;
  margin-bottom: 2.5%;
`

const TextArea = styled.textarea`
   background-color: #fff;
    resize: none;
    border: 0;
    width: 49%;
    height: 100%;
    font-size: 1.8rem;

    &:focus {
      min-width: 400px;
      border: 0px;
      outline: 0px;
    }
`

const OutputArea = styled.div`
  width: 49%;
  background-color: #fff;
`
const Input = styled.input`
border: 0;
    background-color: #fff;
    margin-top: 24px;
    width: 70%;
    font-size: 1.8rem;

    &:focus {
      min-width: 400px;
      border: 0px;
      outline: 0px;
    }
`

export { Editor }
