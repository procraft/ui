import React, { useMemo } from 'react'
// import useStore from 'src/hooks/useStore'
// import { getAsYouTypeFormatter } from '../PhoneField/utils/phone'
// import TextField from '../TextField'

import RSelect from 'react-select'
import { SelectStyled } from './styles'

import { SelectProps, Option } from './interfaces'

export * from './interfaces'

export const Select = <T extends Option = Option>({
  name,
  unstyled,
  disabled,
  ...other
}: SelectProps<T>): JSX.Element => {
  return useMemo(() => {
    return (
      <SelectStyled unstyled={unstyled}>
        <RSelect<T>
          // menuIsOpen={true}
          // https://stackoverflow.com/a/63106230
          // TODO Вообще строка вроде как должна быть обязательная, но не видно никаких ошибок,
          // а заморачиваться с лишним ререндером тоже нет особого смысла
          instanceId="react-select"
          {...other}
          name={name}
          className="RSelect"
          classNamePrefix="RSelect"
          isDisabled={disabled}
        />
      </SelectStyled>
    )
  }, [unstyled, name, disabled, other])
}

