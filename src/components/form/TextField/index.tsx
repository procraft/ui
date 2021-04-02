import React, { useCallback, useMemo, useState } from 'react'
import FormControl from '../FormControl'
import { TextFieldStyled } from './styles'
import { TextFieldProps } from './interfaces'

export * from './interfaces'

const TextField: React.FC<TextFieldProps> = ({
  type = 'text',
  title,
  error,
  helperText,
  fullWidth,
  onFocus: onFocusProps,
  onBlur: onBlurProps,
  ...other
}) => {

  const [focused, focusedSetter] = useState(false);

  const onFocus = useCallback((event: React.FocusEvent<HTMLInputElement>) => {

    focusedSetter(true);

    onFocusProps && onFocusProps(event);
  }, [onFocusProps]);

  const onBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {

    focusedSetter(false);

    onBlurProps && onBlurProps(event);
  }, [onBlurProps]);

  return useMemo(
    () => (
      <>
        <FormControl
          error={error || undefined}
          title={title}
          helperText={helperText}
          fullWidth={fullWidth}
          focused={focused}
        >
          <TextFieldStyled type={type} onFocus={onFocus} onBlur={onBlur} {...other} />
        </FormControl>
      </>
    ),
    [error, title, helperText, fullWidth, focused, type, onFocus, onBlur, other]
  )
}

export default TextField
