import React, { useMemo } from 'react'
// import useStore from 'src/hooks/useStore'
// import { getAsYouTypeFormatter } from '../PhoneField/utils/phone'
// import TextField from '../TextField'

import RSelect from 'react-select'
import { SelectStyled } from './styles'

import { SelectProps, Option } from './interfaces'

export * from './interfaces'

const Select = <T extends Option = Option>({
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

export default Select
