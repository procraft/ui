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

import { Select as Component, SelectProps as ComponentProps } from '../'
import { Option } from '../interfaces'

const title = '@procraft/ui/form/Select'

type ComponentStoryProps = Partial<ComponentProps> & {
  value: Option | null
}

const options: Option[] = [
  {
    label: 'Option 1',
    value: '1',
  },
  {
    label: 'Option 2',
    value: '2',
  },
  {
    label: 'Option 3',
    value: '3',
  },
]

export const Select: React.FC<ComponentStoryProps> = ({
  value: valueProps,
  ...other
}) => {
  const [value, valueSetter] = useState<Option | null>(valueProps)

  const onChange = useCallback((value: Option | null) => {
    valueSetter(value)
  }, [])

  return (
    <>
      <Component
        {...other}
        value={value}
        options={options}
        onChange={onChange}
      />
    </>
  )
}

const args: ComponentStoryProps = {
  title: 'Title',
  helperText: 'Helper Text',
  value: options[1],
  disabled: false,
}

export default {
  title,
  component: Select,
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
