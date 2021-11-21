import React from 'react'

import { Meta } from '@storybook/react'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks'

import { Button as Component, ButtonProps as ComponentProps } from '../'

import MuiButton from 'material-ui/Button'
import MuiIconButton from 'material-ui/IconButton'

const title = '@procraft/ui/Button'

type ComponentStoryProps = Partial<ComponentProps> & {}

export const Button: React.FC<ComponentStoryProps> = ({ ...other }) => {
  // const onClick = useCallback((event: MouseEvent) => {
  //   // eslint-disable-next-line no-console
  //   console.log('onClick event', event)
  // }, [])

  return (
    <>
      <Component {...other}>Button</Component>
      <Component {...other} variant="raised">
        Raised button
      </Component>
      <Component {...other} variant="raised" size="small">
        Raised button small
      </Component>

      <div>
        <MuiButton {...other} onClick={undefined}>
          MuiButton
        </MuiButton>
        <MuiButton {...other} onClick={undefined} color="secondary">
          MuiButton color: secondary
        </MuiButton>
        <MuiIconButton {...other} onClick={undefined} color="secondary">
          MuiIconButton color: secondary
        </MuiIconButton>
        <MuiIconButton {...other} onClick={undefined} color="secondary">
          MuiIconButton color: secondary raised
        </MuiIconButton>
      </div>
    </>
  )
}

const args: ComponentStoryProps = {
  disabled: false,
  color: 'primary',
}

export default {
  title,
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
  args,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>{title}</Title>
          <Subtitle></Subtitle>
          <Description></Description>
          <Primary></Primary>
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta
