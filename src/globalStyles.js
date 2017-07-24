import { injectGlobal } from 'styled-components'

export default () => {
  injectGlobal`
  strong {
    font-weight: 600;
  }

  * {
    box-sizing: border-box;
  }`
}
