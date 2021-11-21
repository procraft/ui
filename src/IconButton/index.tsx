import React, { useMemo } from 'react'
import { IconButtonProps } from './interfaces'
import { IconButtonStyled } from './styles'

export * from './interfaces'

/**
 * Кнопка с нативным обработчиком по клику.
 * Решаемая проблема: реакт все события навешивает на документ.
 * В итоге, если где-то на уровне нативных событий оборвали распространение
 * через event.stopPropagation(), то до обработчика просто не доходит дело.
 * Здесь я использую нативный хэндлер.
 */
export const IconButton: React.FC<IconButtonProps> = ({
  callback,
  onClick,
  children,
  // name,
  ...other
}) => {
  // const [node, ref] = useState<HTMLDivElement | null>(null)

  // useEffect(() => {
  //   if (!node) {
  //     return
  //   }

  //   const onClick = (event: MouseEvent) => {
  //     // event.preventDefault()
  //     event.stopPropagation()

  //     callback(event)
  //   }

  //   node.addEventListener('click', onClick)

  //   return () => {
  //     node?.removeEventListener('click', onClick)
  //   }
  // }, [callback, node])

  return useMemo(() => {
    return (
      <IconButtonStyled onClick={onClick || callback} {...other}>
        {/* <div
          ref={ref}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            // border: '1px solid red',
            borderRadius: '50%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          // TODO событие здесь навешивается не на кнопку, а на див,
          // поэтому в коллбэках не получается просто так name получить.
          // Будем пробрасывать data-name атрибут
          data-name={name}
        > */}
        {children}
        {/* </div> */}
      </IconButtonStyled>
    )
  }, [onClick, other, children, callback])
}
