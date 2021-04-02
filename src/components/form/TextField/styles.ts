import styled from 'styled-components'

type TextFieldStyledProps = {}

export const TextFieldStyled = styled.input<TextFieldStyledProps>`
  border: ${({ theme }) => theme.ui.border.input.default};
  border-radius: 6px;
`
