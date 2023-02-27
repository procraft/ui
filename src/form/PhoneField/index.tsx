import { PhoneNumber } from 'google-libphonenumber'
import React, { useCallback, useMemo, useState } from 'react'
import { FormControl } from '../FormControl'
import { Select, Option } from '../Select'
import { PhoneFieldStyled } from './styles'
import {
  getCountryCodeForRegion,
  Region,
  regionSelectOptions,
  getAsYouTypeFormatter,
  getFormattedPhoneValue,
  getExampleNumberByRegion,
  validatePhone,
  phoneUtil, getRegionByPhone
} from './utils/phone'
import { PhoneFieldProps } from './interfaces'

export { validatePhone }
export * from './interfaces'

export const PhoneField: React.FC<PhoneFieldProps> = ({
  fullWidth,
  value,
  name,
  onChange,
  placeholder: placeholderProps,
  // displayType = 'input',
  disabled,
  error,
  title,
  helperText,
  className,
  menuIsOpen,
  ...other
}) => {
  const defaultRegion = useMemo(
    () => getRegionByPhone(value),
    [value]
  )

  const [region, setRegion] = useState(defaultRegion)

  const exampleNumber = useMemo(
    () => (region ? getExampleNumberByRegion(region) : ''),
    [region]
  )

  const placeholder = placeholderProps || exampleNumber || ''

  const handleRegionChange = useCallback((selectedRegion: Region | null) => {
    if (selectedRegion) {
      setRegion(selectedRegion)
    }
  }, [])

  const getFormattedPhone = useCallback(
    (phone: string) => {
      if (!region) {
        return
      }

      const code = region?.value && getCountryCodeForRegion(region.value)

      const formatter = region && getAsYouTypeFormatter(region.value)

      if (!formatter) {
        return
      }

      let formattedValue = phone
      let fullNumber = phone
      let number: PhoneNumber | undefined

      try {
        number = phoneUtil.parseAndKeepRawInput(phone, region.value)
      } catch (error) {
        // console.error('getFormattedPhone error', error);
      }

      if (number) {
        const formatted = getFormattedPhoneValue(
          number.getNationalNumber()?.toString() || '',
          formatter
        )
        fullNumber = `+${code} ${formatted.value}`

        if (formatted.value) {
          formattedValue = formatted.value
        }
      }

      return {
        code,
        // formattedValue: formatted.value,
        formattedValue,
        fullNumber,
      }
    },
    [region]
  )

  const [focused] = useState(false)

  const onChangePhone = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = getFormattedPhone(event.currentTarget.value || '')

      if (formatted) {
        const { fullNumber } = formatted

        onChange && onChange(fullNumber, validatePhone(fullNumber))
      }
    },
    [getFormattedPhone, onChange]
  )

  const filterOption = useCallback((option: Option, rawInput: string) => {
    let equal = true

    if (rawInput) {
      const reg = new RegExp(`^${rawInput}`, 'i')

      if (
        reg.test(option.value) ||
        reg.test(option.data.countryName as string) ||
        reg.test(option.data.code as string)
      ) {
        equal = true
      } else {
        equal = false
      }
    }

    return equal
  }, [])

  return useMemo(() => {
    const formatted = getFormattedPhone(value || '')

    const {
      code = '',
      formattedValue = '',
    } = formatted || {}

    return (
      <FormControl
        error={error}
        focused={focused}
        fullWidth={fullWidth}
        title={title}
        helperText={helperText}
        shrink={!!value || !!placeholder}
        disabled={disabled || false}
        className={className}
      >
        <PhoneFieldStyled>
          <Select<Region>
            unstyled
            options={regionSelectOptions}
            onChange={handleRegionChange}
            value={region}
            disabled={disabled}
            filterOption={filterOption}
            menuIsOpen={menuIsOpen}
          />
          <span className="code">{code ? `+${code}` : code}</span>
          <input
            name={name}
            type="tel"
            value={formattedValue || ''}
            disabled={disabled}
            onChange={onChangePhone}
            placeholder={placeholder}
            {...other}
          />
        </PhoneFieldStyled>
      </FormControl>
    )
  }, [
    className,
    disabled,
    error,
    filterOption,
    focused,
    fullWidth,
    getFormattedPhone,
    handleRegionChange,
    helperText,
    name,
    onChangePhone,
    other,
    placeholder,
    region,
    title,
    value,
    menuIsOpen,
  ])
}
