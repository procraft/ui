import { IconButtonProps as MuiIconButtonProps } from 'material-ui/IconButton'

export type IconButtonProps = Omit<MuiIconButtonProps, "onClick"> & {
  callback: (event: MouseEvent) => void
  // style: Partial<CSSStyleDeclaration>
}
