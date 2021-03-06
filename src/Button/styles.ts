import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

export type ButtonStyledProps = {
  size?: 'small'
  variant?: 'raised'
  color?: 'default' | 'primary' | 'secondary'
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  font-family: inherit;
  border: 0;
  border-radius: 2px;
  margin: 0;
  padding: 8px 16px;
  display: inline-flex;
  outline: none;
  position: relative;
  user-select: none;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.87);
  min-width: 88px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: 500;
  text-transform: uppercase;

  line-height: 1.4em;
  font-size: ${0.875 * 12}px;
  min-height: 36px;

  &:enabled {
    cursor: pointer;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &:disabled {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.26);
  }

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          padding: 7px 8px;
          min-width: 64px;
          font-size: ${0.8125 * 12}px;
          min-height: 32px;
        `
    }
  }}


  ${({ color }) => {
    let colorStyles: FlattenSimpleInterpolation | undefined

    switch (color) {
      case 'primary':
        colorStyles = css`
          color: #3f51b5;

          &:hover {
            background-color: rgba(63, 81, 181, 0.08);
          }
        `

        break

      case 'secondary':
        colorStyles = css`
          color: #f50057;

          &:hover {
            background-color: rgba(245, 0, 87, 0.08);
          }
        `

        break
    }

    return css`
      ${colorStyles}
    `
  }}
  }}

  ${({ variant, color }) => {
    switch (variant) {
      case 'raised': {
        let colorStyles: FlattenSimpleInterpolation | undefined

        switch (color) {
          case 'default':
            colorStyles = css`
              background-color: #e0e0e0;
            `

            break

          case 'primary':
            colorStyles = css`
              color: #fff;
              background-color: #3f51b5;

              &:hover {
                background-color: #303f9f;
              }
            `

            break

          case 'secondary':
            colorStyles = css`
              color: #f50057;
              background-color: transparent;

              &:hover {
                background-color: rgba(245, 0, 87, 0.08);
              }
            `

            break
        }

        return css`
          box-shadow: 0px 1px 5px 0px rgb(0 0 0 / 20%),
            0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%);

          &:disabled {
            box-shadow: none;
            background-color: rgba(0, 0, 0, 0.12);
          }

          ${colorStyles}
        `
      }
    }
  }}
`
