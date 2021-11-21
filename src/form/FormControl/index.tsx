import React, { useMemo } from 'react'
import {
  FormControlElementStyled,
  FormControlHelperTextStyled,
  FormControlLabelStyled,
  FormControlStyled,
} from './styles'
import { FormControlProps } from './interfaces'

export * from './interfaces'

/**
 * Обертка для поля ввода
 */
export const FormControl: React.FC<FormControlProps> = ({
  children,
  title,
  helperText,
  error,
  fullWidth,
  focused,
  shrink: shrinkProps = false,
  className,
  ...other
}): JSX.Element => {
  return useMemo(() => {
    /**
     * Влияет на положение титла
     */
    const shrink =
      shrinkProps ||
      !!children?.props.value ||
      !!children?.props.placeholder ||
      focused

    return (
      <FormControlStyled
        className={className}
        shrink={shrink}
        fullWidth={fullWidth}
        error={!!error}
        {...other}
      >
        {title ? (
          <FormControlLabelStyled>{title}</FormControlLabelStyled>
        ) : null}
        <FormControlElementStyled>{children}</FormControlElementStyled>
        {error?.message || helperText ? (
          <FormControlHelperTextStyled>
            {error?.message || helperText}
          </FormControlHelperTextStyled>
        ) : null}
      </FormControlStyled>
    )
  }, [
    shrinkProps,
    children,
    focused,
    className,
    fullWidth,
    other,
    title,
    error,
    helperText,
  ])
}
