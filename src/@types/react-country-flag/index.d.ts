declare module 'react-country-flag' {
  import React from 'react'

  declare const ReactCountryFlag: React.FC<{
    countryCode: string

    svg?: boolean

    style?: Record<string, unknown>
  }>

  export default ReactCountryFlag
}
