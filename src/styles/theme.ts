export default {
  colors: {    
    primary: '#3CD3C1',
    secondary: '#D958A6',
    white: '#FAFAFA',
    dark: '#333',
    gray: '#928d8d',
    grayLight: '#eee',
  },

  font: {
    light: 300,
    normal: 400,
    bold: 600,

    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '4rem'
    },
  },

  spacings: {
    xxxsmall: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },

  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },

  border: {
    radius: '0.4rem',
    circle: '50%',
  },
} as const


