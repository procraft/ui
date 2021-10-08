import { InputHTMLAttributes } from 'react'
import { FormControlProps } from '../FormControl'

export type TextAreaProps<P = {}> = InputHTMLAttributes<HTMLTextAreaElement> &
  P &
  Omit<FormControlProps, 'children' | 'focused' | 'disabled'>
