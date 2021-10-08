import { OptionTypeBase, Props as ReactSelectProps } from 'react-select'

export interface Option<T extends any = string> extends OptionTypeBase {
  label: string | JSX.Element
  value: T
  // icon?: any
  // color?: string
  // description?: string
  // selected?: boolean
  // tag?: string
  // tags?: Record<string, boolean>
  // style?: any
  // handler?: (value?: string) => void
  // menuIsOpen?: boolean
}

export type SelectProps<T extends Option<string> = Option<string>> = {
  unstyled?: boolean
  disabled?: boolean
} & ReactSelectProps<T>
