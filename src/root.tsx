import { App } from 'app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from 'resources/theme'
import 'normalize.css'

function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
  }
  
  html {
    font-size: 62.5%;
  }

  h1 {
    font-size: 1rem;
  }

  body {
    font-family: 'DM Sans', sans-serif;
  }
`

export { Root }
