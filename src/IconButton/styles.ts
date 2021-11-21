import styled, { css } from 'styled-components'

import { Button } from '../Button'

export const IconButtonStyled = styled(Button)`
  width: 36px;
  height: 36px;
  min-width: auto;
  min-height: auto;
  padding: 0;
  border-radius: 50%;

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          width: 28px;
          height: 28px;
        `
    }
  }}
`
