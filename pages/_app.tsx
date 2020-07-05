import {AppProps } from 'next/app'
import GlobalStyle from '../components/GlobalStyle'
import 'prism-material-themes/themes/material-palenight.css'

const App = ({Component, pageProps}: AppProps) => {
  return(
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default App