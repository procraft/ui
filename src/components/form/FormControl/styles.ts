import styled, { css } from 'styled-components'

const inputPadding = 10

export type FormControlStyledProps = {
  fullWidth?: boolean
}

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
  transform: translate(${inputPadding}px, calc(1rem + ${inputPadding + 3}px)) scale(1);
  transform-origin: top left;

  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
`

export const FormControlElementStyled = styled.div`
  /* border: 1px solid green; */

  margin-top: 16px;
  position: relative;
`

export const FormControlHelperTextStyled = styled.div`
  /* border: 1px solid purple; */

  color: ${({ theme }) => theme.ui.text.caption.color.secondary};
  font-size: 0.8rem;
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

  ${FormControlLabelStyled} {
  }

  input {
    font-size: 1rem;
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
`
