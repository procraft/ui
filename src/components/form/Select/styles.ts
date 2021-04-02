import styled, { css } from 'styled-components'

export type SelectStyledProps = {
  /**
   * Сбрасываем стили, чтобы использовать как вложенный компонент
   */
  unstyled?: boolean
}

export const SelectStyled = styled.div<SelectStyledProps>`
  .RSelect__menu {
    width: auto;
    max-width: 400px;

    .RSelect__menu-list {
      .RSelect__option {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        /* padding: 2px 0; */
        cursor: pointer;
      }
    }
  }

  ${({ unstyled }) => {
    if (unstyled) {
      return css`
        .RSelect {
          border: none;
          border-right: 1px solid #ccc;

          .RSelect__control {
            border: none;
          }

          .RSelect__indicators {
            > * {
              /* border: none; */
              background-color: transparent;
            }
          }
        }
      `
    }
  }}
`
