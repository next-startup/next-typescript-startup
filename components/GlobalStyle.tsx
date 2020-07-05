import { Global } from '@emotion/core'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { normalize } from 'polished'

// Write your css style in here
const style = css`
  ${normalize()};
  html,body {
    height: 100%;
  }
  body>* {
    height: 100%;
  }
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
