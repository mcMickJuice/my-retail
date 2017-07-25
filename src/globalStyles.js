import { injectGlobal } from 'styled-components'

export default () => {
  injectGlobal`

  strong {
    font-weight: 600;
  }

  html {
    font-family: 'Open Sans', sans-sarif
  }

  * {
    box-sizing: border-box;
    
  }`
}
