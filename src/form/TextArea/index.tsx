import React, { useCallback, useMemo, useState } from 'react'
import FormControl from '../FormControl'
import { TextAreaStyled } from './styles'
import { TextAreaProps } from './interfaces'

export * from './interfaces'

const TextArea: React.FC<TextAreaProps> = ({
  title,
  error,
  helperText,
  fullWidth,
  disabled = false,
  onFocus: onFocusProps,
  onBlur: onBlurProps,
  className,
  ...other
}) => {
  const [focused, focusedSetter] = useState(false)

  const onFocus = useCallback(
    (event: React.FocusEvent<HTMLTextAreaElement>) => {
      focusedSetter(true)

      onFocusProps && onFocusProps(event)
    },
    [onFocusProps]
  )

  const onBlur = useCallback(
    (event: React.FocusEvent<HTMLTextAreaElement>) => {
      focusedSetter(false)

      onBlurProps && onBlurProps(event)
    },
    [onBlurProps]
  )

  return useMemo(
    () => (
      <>
        <FormControl
          error={error || undefined}
          title={title}
          helperText={helperText}
          fullWidth={fullWidth}
          focused={focused}
          disabled={disabled}
          className={className}
        >
          <TextAreaStyled
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            {...other}
          />
        </FormControl>
      </>
    ),
    [
      className,
      error,
      title,
      helperText,
      fullWidth,
      focused,
      disabled,
      onFocus,
      onBlur,
      other,
    ]
  )
}

export default TextArea
