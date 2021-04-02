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

import Component, { TextFieldProps as ComponentProps } from '../'

const title = '@procraft/ui/TextField'

type ComponentStoryProps = Partial<ComponentProps> & {
  value: string
}

export const TextField: React.FC<ComponentStoryProps> = ({
  value: valueProps,
  ...other
}) => {
  const [value, valueSetter] = useState(valueProps)

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    valueSetter(event.target.value || '')
  }, [])

  return (
    <>
      <Component {...other} value={value} onChange={onChange} />
    </>
  )
}

const args: ComponentStoryProps = {
  title: 'Title',
  helperText: 'Helper Text',
  value: '',
  placeholder: "Placeholder",
}

export default {
  title,
  component: TextField,
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
