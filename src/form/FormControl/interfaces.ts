import React from 'react'
import { FieldError } from 'react-hook-form'

export type FormControlStyledProps = {
  fullWidth?: boolean

  disabled: boolean

  error: boolean
}

export type FormControlProps = Omit<FormControlStyledProps, 'error'> & {
  title?: string

  error?: FieldError | null | undefined

  helperText?: string

  children?: React.ReactElement

  /**
   * Необходимо чтобы двигать титл компонента
   */
  focused: boolean

  /**
   * Отдельные вложенные компоненты могут не иметь в первом уровне свойства value,
   * поэтому даем возможность явно указывать это свойство
   */
  shrink?: boolean

  className?: string | undefined
}
