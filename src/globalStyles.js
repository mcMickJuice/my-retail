import { injectGlobal } from 'styled-components'

export default () => {
  injectGlobal`

  strong {
    font-weight: 600;
  }

  html {
    font-family: 'Open Sans', sans-sarif
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-size: 14px;
  }`
}
