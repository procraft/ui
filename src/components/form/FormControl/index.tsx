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
const FormControl: React.FC<FormControlProps> = ({
  children,
  title,
  helperText,
  error: _error,
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
      <FormControlStyled className={className} shrink={shrink} fullWidth={fullWidth} {...other}>
        {title ? (
          <FormControlLabelStyled>{title}</FormControlLabelStyled>
        ) : null}
        <FormControlElementStyled>{children}</FormControlElementStyled>
        {helperText ? (
          <FormControlHelperTextStyled>
            {helperText}
          </FormControlHelperTextStyled>
        ) : null}
      </FormControlStyled>
    )
  }, [children, className, shrinkProps, focused, fullWidth, other, title, helperText])
}

export default FormControl
