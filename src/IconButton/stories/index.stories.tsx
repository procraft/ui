import React, { useCallback } from 'react'

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

import { IconButton as Component, IconButtonProps as ComponentProps } from '../'

const title = '@procraft/ui/IconButton'

type ComponentStoryProps = Partial<ComponentProps> & {}

export const IconButton: React.FC<ComponentStoryProps> = ({ ...other }) => {
  const onClick = useCallback((event: MouseEvent) => {
    // eslint-disable-next-line no-console
    console.log('onClick event', event)
  }, [])

  return (
    <>
      <Component onClick={onClick} {...other}>
        <svg
          width="14"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="13"
            height="16"
            fill="#C4C4C4"
            stroke="black"
          />
          <line x1="2" y1="2.5" x2="12" y2="2.5" stroke="black" />
          <line x1="2" y1="7.5" x2="12" y2="7.5" stroke="black" />
          <line x1="2" y1="12.5" x2="7" y2="12.5" stroke="black" />
        </svg>
      </Component>
    </>
  )
}

const args: ComponentStoryProps = {
  disabled: false,
  variant: 'raised',
}

export default {
  title,
  component: IconButton,
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
