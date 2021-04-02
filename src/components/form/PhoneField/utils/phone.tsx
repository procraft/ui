import React from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AsYouTypeFormatter,
  PhoneNumberFormat,
  PhoneNumberType,
  PhoneNumberUtil,
} from 'google-libphonenumber'
import { values } from 'lodash'

import countryNames from '../../../../utils/country-names.ru.json'
import { Option } from '../../Select';

import ReactCountryFlag from 'react-country-flag'

export type CountryName = keyof typeof countryNames

// export interface Option<T = any> {
//   label: string | JSX.Element
//   value: T
// }

export interface Region extends Option {
  value: CountryName
  label: string | JSX.Element
}

export const phoneUtil = PhoneNumberUtil.getInstance()

// export const normalizePhoneNumber = (value: string): string =>
//   value.replace(/\D+/g, '')

// export const PHONE_DEFAULT_REGION = 'RU'

/**
 * Validates current value of the input to be valid russian phone number and changes validation state accordingly
 * @todo remove duplication
 * @param numberStr
 */
export function validatePhone(numberStr: string): boolean {
  try {
    const phoneNum = phoneUtil.parse(numberStr)
    if (phoneUtil.isValidNumber(phoneNum)) {
      return true
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}

interface RegionPhoneNumberData {
  region: string
  code: number
  asYouTypeFormatter?: AsYouTypeFormatter
}

export const getCountryCodeForRegion = (region: CountryName) => {
  const code = parseInt(phoneUtil.getCountryCodeForRegion(region))

  return !isNaN(code) ? code : null
}

/**
 * Generates two useful maps with information about all supported regions:
 *   1) by region code (e.g. US, RU)
 *   2) by country phone code (e.g. 1, 7), every code can contain multiple regions
 */
function prepareRegionData() {
  const byRegion: { [key: string]: RegionPhoneNumberData } = {}
  const byCode: { [key: number]: RegionPhoneNumberData[] } = {}

  const supportedRegions = phoneUtil.getSupportedRegions()

  for (const region of supportedRegions) {
    if (!countryNames[region as CountryName]) {
      continue
    }

    const data = {
      region,
      code: +phoneUtil.getCountryCodeForRegion(region),
    }
    byRegion[region] = data
    if (!byCode[data.code]) {
      byCode[data.code] = []
    }
    byCode[data.code].push(data)
  }
  return { byRegion, byCode }
}

export const {
  byRegion: phoneNumberDataByRegion,
  byCode: phoneNumberDataByCode,
} = prepareRegionData()

export const regionSelectOptions: Region[] = values(
  phoneNumberDataByRegion
).map((data) => {
  const region = data.region as keyof typeof countryNames

  return {
    value: region,
    label: (
      <>
        {' '}
        <div className="flag">
          <ReactCountryFlag
            countryCode={data.region}
            svg
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>{' '}
        <span className="region">
          {' '}
          {data.region} ({countryNames[region]} +{data.code}){' '}
        </span>{' '}
      </>
    ),
    countryName: countryNames[region],
  }
})

// export const countrySelectOptions: Option[] = values(phoneNumberDataByRegion)
//   .map((data) => {
//     const region = data.region as keyof typeof countryNames

//     return {
//       value: region,
//       label: countryNames[region],
//     }
//   })
//   .sort((a, b) => (a.label > b.label ? 1 : -1))

// export function getPhoneCodeByRegion(region: string): number {
//   return +phoneUtil.getCountryCodeForRegion(region)
// }

// export function getCountryNameByRegion(region: keyof typeof countryNames) {
//   return countryNames[region] || '<неизвестно>'
// }

export function getExampleNumberByRegion(region: Region) {
  const phone = phoneUtil.getExampleNumberForType(
    region.value,
    PhoneNumberType.MOBILE
  )

  if (!phone) {
    return null
  }

  const fullNumber = phoneUtil.format(phone, PhoneNumberFormat.INTERNATIONAL)
  const spacePos = fullNumber.indexOf(' ')
  return fullNumber.substr(spacePos > -1 ? spacePos + 1 : 0)
}

// /**
//  * Tries to detect the region from the up to first three digits of the given value (part of phone number)
//  * @returns region code (RU, US) if found or null if not found
//  */
// export function detectRegionByPhone(phonePart: string): string | null {
//   const normalized = (PhoneNumberUtil as any).normalizeDigitsOnly(phonePart)
//   let idx = 0
//   let accum = ''
//   // eslint-disable-next-line no-constant-condition
//   while (true) {
//     if (normalized.length <= idx || idx > 2) {
//       return null
//     }
//     accum += normalized[idx]
//     const regions = (phoneUtil as any).getRegionCodesForCountryCode(+accum)
//     if (regions.length > 0) {
//       return regions[0]
//     } else {
//       idx++
//     }
//   }
// }

// /**
//  * Returns only digits from the given value
//  */
// export function normalizeNumber(phoneNumber: string): string {
//   return (PhoneNumberUtil as any).normalizeDigitsOnly(phoneNumber)
// }

/**
 * Creates or returns cached phone formatter for the given region
 */
export function getAsYouTypeFormatter(region: string): AsYouTypeFormatter {
  if (!phoneNumberDataByRegion[region]) {
    throw Error(`getAsYouTypeFormatter: invalid region ${region}`)
  }

  return (
    phoneNumberDataByRegion[region].asYouTypeFormatter ||
    new AsYouTypeFormatter(region)
  )
}

// /**
//  * Returns pretty-formatted version of the given phone-number
//  */
// export function formatNumber(strNumber: string): string {
//   const plain = '+' + normalizeNumber(strNumber)
//   try {
//     const phoneNumber = phoneUtil.parse(plain)
//     return phoneUtil.format(phoneNumber, PhoneNumberFormat.INTERNATIONAL)
//   } catch (err) {
//     return plain
//   }
// }

// /**
//  * test given phone and return formatted one
//  * +7 908 068-41-22 -> 908 068-41-22
//  *
//  * @param givenPhoneInputValue
//  *  any phone number
//  * @param formatter
//  * @returns {{value: string, lastOk: boolean}}
//  */
// export function getPhoneWithoutCode(
//   givenPhoneInputValue: string,
//   formatter: any
// ) {
//   if (!givenPhoneInputValue) {
//     return { value: '', lastOk: true }
//   }

//   const region = detectRegionByPhone(givenPhoneInputValue)

//   if (!region) {
//     return
//   }

//   const code = '' + getPhoneCodeByRegion(region)
//   const localNumber = normalizeNumber(givenPhoneInputValue).substr(code.length)

//   return getFormattedPhoneValue(localNumber, formatter)
// }

/**
 * test given phone and return formatted one
 * +7 908 068-41-22 -> 908 068-41-22
 * @param val - phone number without leading country code
 * @param formatter - google-libphonenumber formatter
 * @returns {{value: string, lastOk: boolean}}
 */
export function getFormattedPhoneValue(
  val: string,
  formatter: AsYouTypeFormatter
) {
  let value = ''
  let digitCount = 0
  let lastOk = true

  formatter.clear()

  for (let i = 0; i < val.length; i++) {
    const chr = val[i]

    // max length is considered 15 - country code length, 1-digit codes (+1 and +7) doesnt have 14-digit length numbers
    // so considering max 13 for 2-digit codes
    // see https://en.wikipedia.org/wiki/E.164
    if (!isNaN(parseInt(chr, 10)) && digitCount < 13) {
      value = formatter.inputDigit(chr)
      digitCount++
      lastOk = true
    } else {
      lastOk = false
    }
  }
  return { value, lastOk }
}

// /**
//  * Get full phone with '+', country code and number. Example: +79037778811.
//  */
// export function getFullPhone(phone: string): string {
//   if (phone.indexOf('+') === -1) {
//     return `+${phone}`
//   } else {
//     return phone
//   }
// }

// /**
//  * Method to get a valid phone number or empty string.
//  * Check that phone can be displayed in client list.
//  */
// export function getValidPhone(phone: string): string {
//   let phoneFixed = phone.trim()
//   phoneFixed = phoneFixed[0] === '8' ? '7' + phoneFixed.slice(1) : phoneFixed
//   phoneFixed = '+' + normalizePhoneNumber(phoneFixed)
//   try {
//     const phoneParsed = phoneUtil.parse(phoneFixed)
//     phoneUtil.format(phoneParsed, PhoneNumberFormat.INTERNATIONAL)
//     return phoneFixed
//   } catch (err) {
//     return ''
//   }
// }
