import { InputHTMLAttributes } from 'react'
import { FormControlProps } from '../FormControl'
import { TextFieldProps } from '../TextField/interfaces'

export type PhoneFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /**
   * Вариант отображения текстовое поле или просто текст
   */
  // displayType?: 'text'

  error?: TextFieldProps['error']
  value: string
  onChange?: (phone: string, valid: boolean) => void
  fullWidth?: boolean
  menuIsOpen?: boolean
} & Omit<FormControlProps, 'children' | 'focused'>
