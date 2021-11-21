import { ButtonProps } from '../Button'

export type IconButtonProps = ButtonProps & {
  /**
   * @deprecated use onClick instead
   */
  // callback?: (event: MouseEvent) => void
  callback?: ButtonProps['onClick']
  // style: Partial<CSSStyleDeclaration>

  // TODO Удалить
  /**
   * Ранее на этот атрибут был завязан функционал.
   * Запрещаем его
   */
  'data-name'?: never
}
