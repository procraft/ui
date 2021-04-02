import styled from 'styled-components'
import { SelectStyled } from '../Select/styles'

type PhoneFieldStyledProps = {}

export const PhoneFieldStyled = styled.div<PhoneFieldStyledProps>`
  /* margin-bottom: 20px; */

  display: flex;
  align-items: center;
  padding: 0;

  border: ${({ theme }) => theme.ui.border.input.default};
  border-radius: 6px;

  input {
    border: none;
    background: none;-
  } 

  /* > * {
    border: none;
    margin: 0 2px;
  }

    input {
      padding-left: 4px;
      font-size: 16px;
      padding-bottom: 8px;
    } 
  */


  ${SelectStyled} {
    margin-right: 5px;

    .flag {
      img {
        border: 1px solid #dcdada;
      }
    }

    .RSelect__control {
      flex-wrap: nowrap;

      .RSelect__value-container {
        width: 36px;

        .RSelect__single-value {
          .region {
            display: none;
          }
        }
      }
    }

    .RSelect__menu {
      .css-4ljt47-MenuList {
        .RSelect__option {
          display: flex;
          align-items: baseline;

          font-size: 0.9rem;

          .flag {
            width: 24px;
            height: 18px;
            margin-right: 5px;
          }
        }
      }
    }
  }
`
