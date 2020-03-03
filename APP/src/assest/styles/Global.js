import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {  
    @import url('https://fonts.googleapis.com/css?family=Merienda|Patrick+Hand&display=swap');
    font-family: ${props => props.font};
    padding:0;
    margin:0;
  }
`

const sizes = {
  mobile: {
    portrait: {
      miWidth: '320px',
      maxWidth: '480px'
    },
    landscape: {
      miWidth: '481px',
      maxWidth: '767px'
    }
  },
  tablet: {
    portrait: {
      miWidth: '768px',
      maxWidth: '1024px'
    },
    landscape: {
      miWidth: '768px',
      maxWidth: '1024px'
    }
  },
  desktop: '1024px'
};

export const device = {
  mobilePortrait: (styles) => {
    const { miWidth, maxWidth } = sizes.mobile.portrait;
    return `@media (min-width: ${miWidth}) and (max-width: ${maxWidth}) {
      ${styles}
    }`
  },
  mobileLandscape: (styles) => {
    const { miWidth, maxWidth } = sizes.mobile.landscape;
    return `@media (min-width: ${miWidth}) and (max-width: ${maxWidth}) {
      ${styles}
    }`
  }

  // tablet: (styles) => {
  //   return `@media (min-width: ${sizes.tablet}) {
  //     ${styles}
  //   }`
  // },

  // desktop: (styles) => {
  //   return `@media (min-width: ${sizes.desktop}) {
  //     ${styles}
  //   }`
// }
}

