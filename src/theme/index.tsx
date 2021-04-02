import Color from 'color'

export const darken = (rgba: string, amount: number) => {
  const color = Color(rgba)

  return color.darken(amount).toString()
}

/**
 * Размеры экранов
 */
const breakpoints = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1920,
}

const color = {
  primary: '#333',
  darkBlue: '#093258',
  azure: '#48637B',
  azureLight: '#8799A9',
  azureDark: '#7F92A3',
}

const text = {
  titleBig: {
    color: color.azure,
  },
  title: {
    color: color.darkBlue,
  },
  caption: {
    color: {
      primary: color.azureDark,
      secondary: color.azureLight,
    },
  },
}

const border = {
  input: {
    default: '2px solid #DFE5EA',
  },
}

const theme = {
  breakpoints,
  ui: {
    color,
    text,
    border,
  },
}

export type Theme = typeof theme

// props that later will be injected by styled-components
export type ThemeProps = { theme?: Theme }

export default theme
