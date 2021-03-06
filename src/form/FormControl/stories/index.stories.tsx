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

import {
  FormControl as Component,
  FormControlProps as ComponentProps,
} from '../'

const title = '@procraft/ui/form/FormControl'

type ComponentStoryProps = Partial<ComponentProps> & {
  value: string
  focused: boolean
}

export const FormControl: React.FC<ComponentStoryProps> = ({
  value: valueProps,
  disabled = false,
  className,
  ...other
}) => {
  const [value, valueSetter] = useState(valueProps)

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    valueSetter(event.target.value || '')
  }, [])

  return (
    <>
      <Component disabled={disabled} className={className} {...other}>
        <input value={value || ''} onChange={onChange} disabled={disabled} />
      </Component>
    </>
  )
}

const args: ComponentStoryProps = {
  title: 'Very long ttttttttttttttttttttttttttttttttttttttttttttttttttttttle',
  helperText:
    'Very long Helper Textttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt',
  value:
    'Very long Valueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  focused: false,
  fullWidth: false,
  disabled: false,
  className: undefined,
  error: {
    type: 'required',
    message: 'Required field',
  },
}

export default {
  title,
  component: FormControl,
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
