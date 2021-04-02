import React from 'react'

import App from '.'
import styled from 'styled-components'

const border = '1px solid green'

const AppStyled = styled(App)`
  color: ${({ theme }) => theme.ui.color.primary};

  border: ${border};
`

const MainPage: React.FC = (props) => {
  return <AppStyled {...props} />
}

export default MainPage
