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

import Component, { PhoneFieldProps as ComponentProps } from '../'

const title = '@procraft/ui/form/PhoneField'

type ComponentStoryProps = Partial<ComponentProps> & {
  disabled: boolean
}

export const PhoneField: React.FC<ComponentStoryProps> = ({
  value: valueProps = '',
  ...other
}) => {
  const [value, valueSetter] = useState<string>(valueProps)

  const onChange = useCallback((phone: string, _valid: boolean) => {
    valueSetter(phone)
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
  // value: '+7-987-654-32-10',
  disabled: false,
}

export default {
  title,
  component: PhoneField,
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
