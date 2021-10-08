import React, { useEffect, useState } from 'react'
import { ButtonStyled } from './styles'
import { ButtonProps } from './interfaces'

export * from './interfaces'

// TODO Надо чтобы заменило и IconButton
/**
 * Кнопка с нативным обработчиком событий
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  ...other
}) => {
  const [element, elementSetter] = useState<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!element) {
      return
    }

    onClick && element.addEventListener('click', onClick)

    return () => {
      onClick && element.removeEventListener('click', onClick)
    }
  }, [element, onClick])

  return (
    <ButtonStyled {...other} ref={elementSetter}>
      {children}
    </ButtonStyled>
  )
}
