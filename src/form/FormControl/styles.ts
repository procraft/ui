import styled, { css } from 'styled-components'
import { FormControlStyledProps } from './interfaces'

const inputPadding = 10

type FormControlStyledPrivateProps = FormControlStyledProps & {
  /**
   * Сокращенный вариант лейбла (если в фокусе или есть значение)
   */
  shrink: boolean
}

export const FormControlLabelStyled = styled.label`
  /* border: 1px solid red; */

  color: ${({ theme }) => theme.ui.text.caption.color.primary};
  pointer-events: none;

  display: block;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  top: 0;
  left: 0;
  position: absolute;
  transform: translate(${inputPadding}px, calc(12px + ${inputPadding + 3}px))
    scale(1);
  transform-origin: top left;

  padding: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 1;

  white-space: nowrap;
  text-overflow: ellipsis;
  width: 90%;
  overflow: hidden;
`

export const FormControlElementStyled = styled.div`
  /* border: 1px solid green; */

  margin-top: 16px;
  /* position: relative; */
`

export const FormControlHelperTextStyled = styled.div`
  /* border: 1px solid purple; */

  color: ${({ theme }) => theme.ui.text.caption.color.secondary};
  font-size: ${0.8 * 12}px;
  margin-top: 3px;
`

export const FormControlStyled = styled.div<FormControlStyledPrivateProps>`
  position: relative;
  /* border: ${({ theme }) => theme.ui.border.input.default}; */

  display: inline-flex;
  padding: 0;
  min-width: 0;
  flex-direction: column;
  vertical-align: top;
  width: 100%;

  /* padding-top: 10px;
  padding-bottom: 20px; */

  /* border-color: blue; */

  * {
    outline: none;
  }

  ${({ fullWidth }) => {
    if (fullWidth) {
      return css`
        max-width: 100%;
      `
    } else {
      return css`
        max-width: 40ch;
      `
    }
  }}

  font-size: 12px;
  line-height: 1;

  input,
  textarea {
    font-family: inherit;
    font-size: 12px;
    line-height: 1;
    padding: ${inputPadding}px ${inputPadding / 2}px;
    width: 100%;
  }

  ${({ shrink }) => {
    if (shrink) {
      return css`
        ${FormControlLabelStyled} {
          transform: translate(0, 1.5px) scale(0.8);
        }
      `
    }
  }}

  ${({ disabled }) => {
    if (disabled) {
      return css`
        ${FormControlElementStyled} {
          background: ${({ theme }) => theme.ui.background.disabled};
        }
      `
    }
  }}

  ${({ error }) => {
    if (error) {
      return css`
        ${FormControlHelperTextStyled} {
          padding: 10px 15px;
          border-radius: 8px;
          background: ${({ theme }) => theme.ui.text.error.bg};
          color: ${({ theme }) => theme.ui.text.error.color};
        }
      `
    }
  }}
`
