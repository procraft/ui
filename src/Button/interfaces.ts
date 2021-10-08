import { ButtonHTMLAttributes } from 'react'
import { ButtonStyledProps } from './styles'

export type ButtonProps = ButtonStyledProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
    onClick?: (event: MouseEvent) => void
  }
