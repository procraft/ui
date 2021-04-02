import React, { useCallback, useState } from 'react'

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

import Component, { TextAreaProps as ComponentProps } from '../'

const title = '@procraft/ui/form/TextArea'

type ComponentStoryProps = Partial<ComponentProps> & {
  value: string
}

export const TextArea: React.FC<ComponentStoryProps> = ({
  value: valueProps,
  disabled = false,
  ...other
}) => {
  const [value, valueSetter] = useState(valueProps)

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      valueSetter(event.target.value || '')
    },
    []
  )

  return (
    <>
      <Component
        {...other}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

const args: ComponentStoryProps = {
  title: 'Very long ttttttttttttttttttttttttttttttttttttttttttttttttttttttle',
  helperText:
    'Very long Helper Textttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt',
  value:
    'Very long Valueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  placeholder:
    'Very long Placeholderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
  disabled: false,
}

export default {
  title,
  component: TextArea,
  argTypes: {},
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
