import { PhoneNumber } from 'google-libphonenumber'
import React, { useCallback, useMemo, useState } from 'react'
import FormControl from '../FormControl'
import Select, { Option } from '../Select'
// import TextField from '../TextField'
import { PhoneFieldStyled } from './styles'
import {
  getCountryCodeForRegion,
  Region,
  regionSelectOptions,
  getAsYouTypeFormatter,
  getFormattedPhoneValue,
  getExampleNumberByRegion,
  validatePhone,
  phoneUtil,
} from './utils/phone'
import { PhoneFieldProps } from './interfaces'

export { validatePhone }
export * from './interfaces'

const PhoneField: React.FC<PhoneFieldProps> = ({
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
    () => regionSelectOptions.find((n) => n.value === 'RU'),
    []
  )

  const [region, setRegion] = useState(defaultRegion)

  const exampleNumber = useMemo(
    () => (region ? getExampleNumberByRegion(region) : ''),
    [region]
  )

  const placeholder = placeholderProps || exampleNumber || ''

  const handleRegionChange = useCallback((selectedRegion: Region | null) => {
    // console.log('handleRegionChange selectedRegion', selectedRegion)

    if (selectedRegion) {
      // console.log('handleRegionChange selectedRegion code', code, typeof code)

      // if (selectedRegion.value === "RU") {
      //   //
      // }

      setRegion(selectedRegion)
    }

    // this.formatter = getAsYouTypeFormatter(selectedRegion)
    // const countryCode = getPhoneCodeByRegion(selectedRegion)
    // const fullNumber = this.getFinalValue(countryCode, '')

    // this.setState(
    //   {
    //     selectedRegion, countryCode, fullNumber,
    //     numberInRegion: '',
    //     exampleNumber: getExampleNumberByRegion(selectedRegion),
    //   },
    //   () => {
    //     if (this.props.onChange) {
    //       this.props.onChange(fullNumber) // call externally injected onChange (i.e. from redux-forms)
    //     }
    //   },
    // )

    // if (this.inputRef) {
    //   this.inputRef.focus()
    // }
  }, [])

  // const [phone, setPhone] = useState('')

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

      // const isPossibleNumber = phoneUtil.isPossibleNumber(phone);

      // console.log('isPossibleNumber', isPossibleNumber);

      // let phoneWithoutCode = phone;
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
        reg.test(option.data.countryName as string)
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
      // fullNumber = "",
    } = formatted || {}

    // if (displayType === 'text') {
    //   return (
    //     <NumberFormat
    //       value={formattedValue}
    //       // type="tel"
    //       displayType="text"
    //       format="+# (###) ###-##-##"
    //       mask="_"
    //     />
    //   )
    // } else {
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
        <PhoneFieldStyled
        // fullWidth={fullWidth}
        >
          <Select<Region>
            // menuIsOpen
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
            // unstyledBorder
            // fullWidth={true}
            name={name}
            type="tel"
            // value={value}
            value={formattedValue || ''}
            disabled={disabled}
            onChange={onChangePhone}
            placeholder={placeholder}
            {...other}
          />
        </PhoneFieldStyled>
      </FormControl>
    )
    // }
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

export default PhoneField
