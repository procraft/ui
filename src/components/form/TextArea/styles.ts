import styled from 'styled-components'

type TextAreaStyledProps = {}

export const TextAreaStyled = styled.textarea<TextAreaStyledProps>`
  border: ${({ theme }) => theme.ui.border.input.default};
  border-radius: 6px;
  width: 100%;
  min-height: 4rem;
`
