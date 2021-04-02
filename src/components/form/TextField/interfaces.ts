import { InputHTMLAttributes } from 'react'
import { FormControlProps } from '../FormControl'

export type TextFieldProps<P = {}> = InputHTMLAttributes<HTMLInputElement> &
  P &
  Omit<FormControlProps, 'children' | 'focused' | 'disabled'>
