import { ButtonHTMLAttributes } from 'react'
import { ButtonStyledProps } from './styles'

export type ButtonProps = ButtonStyledProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'color'> & {
    onClick?: (event: MouseEvent) => void
  }
