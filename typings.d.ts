// This file is generated automatically by `scripts/build/typings.js`. Please, don't change it.

// FP Interfaces

interface CurriedFn1<A, R> {
  (a: A): R
}

interface CurriedFn2<A, B, R> {
  (a: A): CurriedFn1<B, R>
  (a: A, b: B): R
}

interface CurriedFn3<A, B, C, R> {
  (a: A): CurriedFn2<B, C, R>
  (a: A, b: B): CurriedFn1<C, R>
  (a: A, b: B, c: C): R
}

interface CurriedFn4<A, B, C, D, R> {
  (a: A): CurriedFn3<B, C, D, R>
  (a: A, b: B): CurriedFn2<C, D, R>
  (a: A, b: B, c: C): CurriedFn1<D, R>
  (a: A, b: B, c: C, d: D): R
}

// Type Aliases

type Interval = {
  start: Date | number
  end: Date | number
}
type IntervalAliased = Interval

type Locale = {
  code?: string
  formatDistance?: (...args: Array<any>) => any
  formatRelative?: (...args: Array<any>) => any
  localize?: {
    ordinalNumber: (...args: Array<any>) => any
    era: (...args: Array<any>) => any
    quarter: (...args: Array<any>) => any
    month: (...args: Array<any>) => any
    day: (...args: Array<any>) => any
    dayPeriod: (...args: Array<any>) => any
  }
  formatLong?: {
    date: (...args: Array<any>) => any
    time: (...args: Array<any>) => any
    dateTime: (...args: Array<any>) => any
  }
  match?: {
    ordinalNumber: (...args: Array<any>) => any
    era: (...args: Array<any>) => any
    quarter: (...args: Array<any>) => any
    month: (...args: Array<any>) => any
    day: (...args: Array<any>) => any
    dayPeriod: (...args: Array<any>) => any
  }
  options?: {
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  }
}
type LocaleAliased = Locale

type Duration = {
  years?: number
  months?: number
  weeks?: number
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}
type DurationAliased = Duration

type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6
type DayAliased = Day

// Exported Type Aliases

declare module 'date-fns' {
  export type Interval = IntervalAliased

  export type Locale = LocaleAliased

  export type Duration = DurationAliased

  export type Day = DayAliased
}

// Regular Functions

declare module 'date-fns' {
  function add(date: any, duration: any): void
  namespace add {}

  function differenceInDays(dateLeft: any, dateRight: any): void
  namespace differenceInDays {}

  function format(date: any, format: any, options: any): void
  namespace format {}

  function formatDistance(date: any, baseDate: any, options: any): void
  namespace formatDistance {}

  function getHours(date: any): void
  namespace getHours {}

  function isDate(value: any): void
  namespace isDate {}

  function isSaturday(date: any): void
  namespace isSaturday {}

  function isSunday(date: any): void
  namespace isSunday {}

  function isValid(date: any): void
  namespace isValid {}

  function parse(
    dateString: any,
    formatString: any,
    referenceDate: any,
    options: any
  ): void
  namespace parse {}

  function parseISO(argument: any, options: any): void
  namespace parseISO {}

  function sub(date: any, duration: any): void
  namespace sub {}

  const daysInWeek: number

  const daysInYear: number

  const maxTime: number

  const millisecondsInWeek: number

  const millisecondsInDay: number

  const millisecondsInMinute: number

  const millisecondsInHour: number

  const millisecondsInSecond: number

  const minTime: number

  const minutesInYear: number

  const minutesInMonth: number

  const minutesInDay: number

  const minutesInHour: number

  const monthsInQuarter: number

  const monthsInYear: number

  const quartersInYear: number

  const secondsInHour: number

  const secondsInMinute: number

  const secondsInDay: number

  const secondsInWeek: number

  const secondsInYear: number

  const secondsInMonth: number

  const secondsInQuarter: number
}

declare module 'date-fns/constants' {
  export const daysInWeek: number
  export const daysInYear: number
  export const maxTime: number
  export const millisecondsInWeek: number
  export const millisecondsInDay: number
  export const millisecondsInMinute: number
  export const millisecondsInHour: number
  export const millisecondsInSecond: number
  export const minTime: number
  export const minutesInYear: number
  export const minutesInMonth: number
  export const minutesInDay: number
  export const minutesInHour: number
  export const monthsInQuarter: number
  export const monthsInYear: number
  export const quartersInYear: number
  export const secondsInHour: number
  export const secondsInMinute: number
  export const secondsInDay: number
  export const secondsInWeek: number
  export const secondsInYear: number
  export const secondsInMonth: number
  export const secondsInQuarter: number
}

declare module 'date-fns/constants/index' {
  export const daysInWeek: number
  export const daysInYear: number
  export const maxTime: number
  export const millisecondsInWeek: number
  export const millisecondsInDay: number
  export const millisecondsInMinute: number
  export const millisecondsInHour: number
  export const millisecondsInSecond: number
  export const minTime: number
  export const minutesInYear: number
  export const minutesInMonth: number
  export const minutesInDay: number
  export const minutesInHour: number
  export const monthsInQuarter: number
  export const monthsInYear: number
  export const quartersInYear: number
  export const secondsInHour: number
  export const secondsInMinute: number
  export const secondsInDay: number
  export const secondsInWeek: number
  export const secondsInYear: number
  export const secondsInMonth: number
  export const secondsInQuarter: number
}

declare module 'date-fns/constants/index.js' {
  export const daysInWeek: number
  export const daysInYear: number
  export const maxTime: number
  export const millisecondsInWeek: number
  export const millisecondsInDay: number
  export const millisecondsInMinute: number
  export const millisecondsInHour: number
  export const millisecondsInSecond: number
  export const minTime: number
  export const minutesInYear: number
  export const minutesInMonth: number
  export const minutesInDay: number
  export const minutesInHour: number
  export const monthsInQuarter: number
  export const monthsInYear: number
  export const quartersInYear: number
  export const secondsInHour: number
  export const secondsInMinute: number
  export const secondsInDay: number
  export const secondsInWeek: number
  export const secondsInYear: number
  export const secondsInMonth: number
  export const secondsInQuarter: number
}

declare module 'date-fns/add' {
  import { add } from 'date-fns'
  export default add
}

declare module 'date-fns/differenceInDays' {
  import { differenceInDays } from 'date-fns'
  export default differenceInDays
}

declare module 'date-fns/format' {
  import { format } from 'date-fns'
  export default format
}

declare module 'date-fns/formatDistance' {
  import { formatDistance } from 'date-fns'
  export default formatDistance
}

declare module 'date-fns/getHours' {
  import { getHours } from 'date-fns'
  export default getHours
}

declare module 'date-fns/isDate' {
  import { isDate } from 'date-fns'
  export default isDate
}

declare module 'date-fns/isSaturday' {
  import { isSaturday } from 'date-fns'
  export default isSaturday
}

declare module 'date-fns/isSunday' {
  import { isSunday } from 'date-fns'
  export default isSunday
}

declare module 'date-fns/isValid' {
  import { isValid } from 'date-fns'
  export default isValid
}

declare module 'date-fns/parse' {
  import { parse } from 'date-fns'
  export default parse
}

declare module 'date-fns/parseISO' {
  import { parseISO } from 'date-fns'
  export default parseISO
}

declare module 'date-fns/sub' {
  import { sub } from 'date-fns'
  export default sub
}

declare module 'date-fns/add/index' {
  import { add } from 'date-fns'
  export default add
}

declare module 'date-fns/differenceInDays/index' {
  import { differenceInDays } from 'date-fns'
  export default differenceInDays
}

declare module 'date-fns/format/index' {
  import { format } from 'date-fns'
  export default format
}

declare module 'date-fns/formatDistance/index' {
  import { formatDistance } from 'date-fns'
  export default formatDistance
}

declare module 'date-fns/getHours/index' {
  import { getHours } from 'date-fns'
  export default getHours
}

declare module 'date-fns/isDate/index' {
  import { isDate } from 'date-fns'
  export default isDate
}

declare module 'date-fns/isSaturday/index' {
  import { isSaturday } from 'date-fns'
  export default isSaturday
}

declare module 'date-fns/isSunday/index' {
  import { isSunday } from 'date-fns'
  export default isSunday
}

declare module 'date-fns/isValid/index' {
  import { isValid } from 'date-fns'
  export default isValid
}

declare module 'date-fns/parse/index' {
  import { parse } from 'date-fns'
  export default parse
}

declare module 'date-fns/parseISO/index' {
  import { parseISO } from 'date-fns'
  export default parseISO
}

declare module 'date-fns/sub/index' {
  import { sub } from 'date-fns'
  export default sub
}

declare module 'date-fns/add/index.js' {
  import { add } from 'date-fns'
  export default add
}

declare module 'date-fns/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns'
  export default differenceInDays
}

declare module 'date-fns/format/index.js' {
  import { format } from 'date-fns'
  export default format
}

declare module 'date-fns/formatDistance/index.js' {
  import { formatDistance } from 'date-fns'
  export default formatDistance
}

declare module 'date-fns/getHours/index.js' {
  import { getHours } from 'date-fns'
  export default getHours
}

declare module 'date-fns/isDate/index.js' {
  import { isDate } from 'date-fns'
  export default isDate
}

declare module 'date-fns/isSaturday/index.js' {
  import { isSaturday } from 'date-fns'
  export default isSaturday
}

declare module 'date-fns/isSunday/index.js' {
  import { isSunday } from 'date-fns'
  export default isSunday
}

declare module 'date-fns/isValid/index.js' {
  import { isValid } from 'date-fns'
  export default isValid
}

declare module 'date-fns/parse/index.js' {
  import { parse } from 'date-fns'
  export default parse
}

declare module 'date-fns/parseISO/index.js' {
  import { parseISO } from 'date-fns'
  export default parseISO
}

declare module 'date-fns/sub/index.js' {
  import { sub } from 'date-fns'
  export default sub
}

// FP Functions

declare module 'date-fns/fp' {
  const add: CurriedFn2<void, void, void>
  namespace add {}

  const differenceInDays: CurriedFn2<void, void, void>
  namespace differenceInDays {}

  const format: CurriedFn2<void, void, void>
  namespace format {}

  const formatDistance: CurriedFn2<void, void, void>
  namespace formatDistance {}

  const formatDistanceWithOptions: CurriedFn3<void, void, void, void>
  namespace formatDistanceWithOptions {}

  const formatWithOptions: CurriedFn3<void, void, void, void>
  namespace formatWithOptions {}

  const getHours: CurriedFn1<void, void>
  namespace getHours {}

  const isDate: CurriedFn1<void, void>
  namespace isDate {}

  const isSaturday: CurriedFn1<void, void>
  namespace isSaturday {}

  const isSunday: CurriedFn1<void, void>
  namespace isSunday {}

  const isValid: CurriedFn1<void, void>
  namespace isValid {}

  const parse: CurriedFn3<void, void, void, void>
  namespace parse {}

  const parseISO: CurriedFn1<void, void>
  namespace parseISO {}

  const parseISOWithOptions: CurriedFn2<void, void, void>
  namespace parseISOWithOptions {}

  const parseWithOptions: CurriedFn4<void, void, void, void, void>
  namespace parseWithOptions {}

  const sub: CurriedFn2<void, void, void>
  namespace sub {}

  const daysInWeek: number

  const daysInYear: number

  const maxTime: number

  const millisecondsInWeek: number

  const millisecondsInDay: number

  const millisecondsInMinute: number

  const millisecondsInHour: number

  const millisecondsInSecond: number

  const minTime: number

  const minutesInYear: number

  const minutesInMonth: number

  const minutesInDay: number

  const minutesInHour: number

  const monthsInQuarter: number

  const monthsInYear: number

  const quartersInYear: number

  const secondsInHour: number

  const secondsInMinute: number

  const secondsInDay: number

  const secondsInWeek: number

  const secondsInYear: number

  const secondsInMonth: number

  const secondsInQuarter: number
}

declare module 'date-fns/fp/add' {
  import { add } from 'date-fns/fp'
  export default add
}

declare module 'date-fns/fp/differenceInDays' {
  import { differenceInDays } from 'date-fns/fp'
  export default differenceInDays
}

declare module 'date-fns/fp/format' {
  import { format } from 'date-fns/fp'
  export default format
}

declare module 'date-fns/fp/formatDistance' {
  import { formatDistance } from 'date-fns/fp'
  export default formatDistance
}

declare module 'date-fns/fp/formatDistanceWithOptions' {
  import { formatDistanceWithOptions } from 'date-fns/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/fp/formatWithOptions' {
  import { formatWithOptions } from 'date-fns/fp'
  export default formatWithOptions
}

declare module 'date-fns/fp/getHours' {
  import { getHours } from 'date-fns/fp'
  export default getHours
}

declare module 'date-fns/fp/isDate' {
  import { isDate } from 'date-fns/fp'
  export default isDate
}

declare module 'date-fns/fp/isSaturday' {
  import { isSaturday } from 'date-fns/fp'
  export default isSaturday
}

declare module 'date-fns/fp/isSunday' {
  import { isSunday } from 'date-fns/fp'
  export default isSunday
}

declare module 'date-fns/fp/isValid' {
  import { isValid } from 'date-fns/fp'
  export default isValid
}

declare module 'date-fns/fp/parse' {
  import { parse } from 'date-fns/fp'
  export default parse
}

declare module 'date-fns/fp/parseISO' {
  import { parseISO } from 'date-fns/fp'
  export default parseISO
}

declare module 'date-fns/fp/parseISOWithOptions' {
  import { parseISOWithOptions } from 'date-fns/fp'
  export default parseISOWithOptions
}

declare module 'date-fns/fp/parseWithOptions' {
  import { parseWithOptions } from 'date-fns/fp'
  export default parseWithOptions
}

declare module 'date-fns/fp/sub' {
  import { sub } from 'date-fns/fp'
  export default sub
}

declare module 'date-fns/fp/add/index' {
  import { add } from 'date-fns/fp'
  export default add
}

declare module 'date-fns/fp/differenceInDays/index' {
  import { differenceInDays } from 'date-fns/fp'
  export default differenceInDays
}

declare module 'date-fns/fp/format/index' {
  import { format } from 'date-fns/fp'
  export default format
}

declare module 'date-fns/fp/formatDistance/index' {
  import { formatDistance } from 'date-fns/fp'
  export default formatDistance
}

declare module 'date-fns/fp/formatDistanceWithOptions/index' {
  import { formatDistanceWithOptions } from 'date-fns/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/fp/formatWithOptions/index' {
  import { formatWithOptions } from 'date-fns/fp'
  export default formatWithOptions
}

declare module 'date-fns/fp/getHours/index' {
  import { getHours } from 'date-fns/fp'
  export default getHours
}

declare module 'date-fns/fp/isDate/index' {
  import { isDate } from 'date-fns/fp'
  export default isDate
}

declare module 'date-fns/fp/isSaturday/index' {
  import { isSaturday } from 'date-fns/fp'
  export default isSaturday
}

declare module 'date-fns/fp/isSunday/index' {
  import { isSunday } from 'date-fns/fp'
  export default isSunday
}

declare module 'date-fns/fp/isValid/index' {
  import { isValid } from 'date-fns/fp'
  export default isValid
}

declare module 'date-fns/fp/parse/index' {
  import { parse } from 'date-fns/fp'
  export default parse
}

declare module 'date-fns/fp/parseISO/index' {
  import { parseISO } from 'date-fns/fp'
  export default parseISO
}

declare module 'date-fns/fp/parseISOWithOptions/index' {
  import { parseISOWithOptions } from 'date-fns/fp'
  export default parseISOWithOptions
}

declare module 'date-fns/fp/parseWithOptions/index' {
  import { parseWithOptions } from 'date-fns/fp'
  export default parseWithOptions
}

declare module 'date-fns/fp/sub/index' {
  import { sub } from 'date-fns/fp'
  export default sub
}

declare module 'date-fns/fp/add/index.js' {
  import { add } from 'date-fns/fp'
  export default add
}

declare module 'date-fns/fp/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns/fp'
  export default differenceInDays
}

declare module 'date-fns/fp/format/index.js' {
  import { format } from 'date-fns/fp'
  export default format
}

declare module 'date-fns/fp/formatDistance/index.js' {
  import { formatDistance } from 'date-fns/fp'
  export default formatDistance
}

declare module 'date-fns/fp/formatDistanceWithOptions/index.js' {
  import { formatDistanceWithOptions } from 'date-fns/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/fp/formatWithOptions/index.js' {
  import { formatWithOptions } from 'date-fns/fp'
  export default formatWithOptions
}

declare module 'date-fns/fp/getHours/index.js' {
  import { getHours } from 'date-fns/fp'
  export default getHours
}

declare module 'date-fns/fp/isDate/index.js' {
  import { isDate } from 'date-fns/fp'
  export default isDate
}

declare module 'date-fns/fp/isSaturday/index.js' {
  import { isSaturday } from 'date-fns/fp'
  export default isSaturday
}

declare module 'date-fns/fp/isSunday/index.js' {
  import { isSunday } from 'date-fns/fp'
  export default isSunday
}

declare module 'date-fns/fp/isValid/index.js' {
  import { isValid } from 'date-fns/fp'
  export default isValid
}

declare module 'date-fns/fp/parse/index.js' {
  import { parse } from 'date-fns/fp'
  export default parse
}

declare module 'date-fns/fp/parseISO/index.js' {
  import { parseISO } from 'date-fns/fp'
  export default parseISO
}

declare module 'date-fns/fp/parseISOWithOptions/index.js' {
  import { parseISOWithOptions } from 'date-fns/fp'
  export default parseISOWithOptions
}

declare module 'date-fns/fp/parseWithOptions/index.js' {
  import { parseWithOptions } from 'date-fns/fp'
  export default parseWithOptions
}

declare module 'date-fns/fp/sub/index.js' {
  import { sub } from 'date-fns/fp'
  export default sub
}

// ECMAScript Module Functions

declare module 'date-fns/esm' {
  function add(date: any, duration: any): void
  namespace add {}

  function differenceInDays(dateLeft: any, dateRight: any): void
  namespace differenceInDays {}

  function format(date: any, format: any, options: any): void
  namespace format {}

  function formatDistance(date: any, baseDate: any, options: any): void
  namespace formatDistance {}

  function getHours(date: any): void
  namespace getHours {}

  function isDate(value: any): void
  namespace isDate {}

  function isSaturday(date: any): void
  namespace isSaturday {}

  function isSunday(date: any): void
  namespace isSunday {}

  function isValid(date: any): void
  namespace isValid {}

  function parse(
    dateString: any,
    formatString: any,
    referenceDate: any,
    options: any
  ): void
  namespace parse {}

  function parseISO(argument: any, options: any): void
  namespace parseISO {}

  function sub(date: any, duration: any): void
  namespace sub {}

  const daysInWeek: number

  const daysInYear: number

  const maxTime: number

  const millisecondsInWeek: number

  const millisecondsInDay: number

  const millisecondsInMinute: number

  const millisecondsInHour: number

  const millisecondsInSecond: number

  const minTime: number

  const minutesInYear: number

  const minutesInMonth: number

  const minutesInDay: number

  const minutesInHour: number

  const monthsInQuarter: number

  const monthsInYear: number

  const quartersInYear: number

  const secondsInHour: number

  const secondsInMinute: number

  const secondsInDay: number

  const secondsInWeek: number

  const secondsInYear: number

  const secondsInMonth: number

  const secondsInQuarter: number
}

declare module 'date-fns/esm/add' {
  import { add } from 'date-fns/esm'
  export default add
}

declare module 'date-fns/esm/differenceInDays' {
  import { differenceInDays } from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/format' {
  import { format } from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/formatDistance' {
  import { formatDistance } from 'date-fns/esm'
  export default formatDistance
}

declare module 'date-fns/esm/getHours' {
  import { getHours } from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/isDate' {
  import { isDate } from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isSaturday' {
  import { isSaturday } from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday' {
  import { isSunday } from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isValid' {
  import { isValid } from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/parse' {
  import { parse } from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/parseISO' {
  import { parseISO } from 'date-fns/esm'
  export default parseISO
}

declare module 'date-fns/esm/sub' {
  import { sub } from 'date-fns/esm'
  export default sub
}

declare module 'date-fns/esm/add/index' {
  import { add } from 'date-fns/esm'
  export default add
}

declare module 'date-fns/esm/differenceInDays/index' {
  import { differenceInDays } from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/format/index' {
  import { format } from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/formatDistance/index' {
  import { formatDistance } from 'date-fns/esm'
  export default formatDistance
}

declare module 'date-fns/esm/getHours/index' {
  import { getHours } from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/isDate/index' {
  import { isDate } from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isSaturday/index' {
  import { isSaturday } from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday/index' {
  import { isSunday } from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isValid/index' {
  import { isValid } from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/parse/index' {
  import { parse } from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/parseISO/index' {
  import { parseISO } from 'date-fns/esm'
  export default parseISO
}

declare module 'date-fns/esm/sub/index' {
  import { sub } from 'date-fns/esm'
  export default sub
}

declare module 'date-fns/esm/add/index.js' {
  import { add } from 'date-fns/esm'
  export default add
}

declare module 'date-fns/esm/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/format/index.js' {
  import { format } from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/formatDistance/index.js' {
  import { formatDistance } from 'date-fns/esm'
  export default formatDistance
}

declare module 'date-fns/esm/getHours/index.js' {
  import { getHours } from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/isDate/index.js' {
  import { isDate } from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isSaturday/index.js' {
  import { isSaturday } from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday/index.js' {
  import { isSunday } from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isValid/index.js' {
  import { isValid } from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/parse/index.js' {
  import { parse } from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/parseISO/index.js' {
  import { parseISO } from 'date-fns/esm'
  export default parseISO
}

declare module 'date-fns/esm/sub/index.js' {
  import { sub } from 'date-fns/esm'
  export default sub
}

// ECMAScript Module FP Functions

declare module 'date-fns/esm/fp' {
  const add: CurriedFn2<void, void, void>
  namespace add {}

  const differenceInDays: CurriedFn2<void, void, void>
  namespace differenceInDays {}

  const format: CurriedFn2<void, void, void>
  namespace format {}

  const formatDistance: CurriedFn2<void, void, void>
  namespace formatDistance {}

  const formatDistanceWithOptions: CurriedFn3<void, void, void, void>
  namespace formatDistanceWithOptions {}

  const formatWithOptions: CurriedFn3<void, void, void, void>
  namespace formatWithOptions {}

  const getHours: CurriedFn1<void, void>
  namespace getHours {}

  const isDate: CurriedFn1<void, void>
  namespace isDate {}

  const isSaturday: CurriedFn1<void, void>
  namespace isSaturday {}

  const isSunday: CurriedFn1<void, void>
  namespace isSunday {}

  const isValid: CurriedFn1<void, void>
  namespace isValid {}

  const parse: CurriedFn3<void, void, void, void>
  namespace parse {}

  const parseISO: CurriedFn1<void, void>
  namespace parseISO {}

  const parseISOWithOptions: CurriedFn2<void, void, void>
  namespace parseISOWithOptions {}

  const parseWithOptions: CurriedFn4<void, void, void, void, void>
  namespace parseWithOptions {}

  const sub: CurriedFn2<void, void, void>
  namespace sub {}

  const daysInWeek: number

  const daysInYear: number

  const maxTime: number

  const millisecondsInWeek: number

  const millisecondsInDay: number

  const millisecondsInMinute: number

  const millisecondsInHour: number

  const millisecondsInSecond: number

  const minTime: number

  const minutesInYear: number

  const minutesInMonth: number

  const minutesInDay: number

  const minutesInHour: number

  const monthsInQuarter: number

  const monthsInYear: number

  const quartersInYear: number

  const secondsInHour: number

  const secondsInMinute: number

  const secondsInDay: number

  const secondsInWeek: number

  const secondsInYear: number

  const secondsInMonth: number

  const secondsInQuarter: number
}

declare module 'date-fns/esm/fp/add' {
  import { add } from 'date-fns/esm/fp'
  export default add
}

declare module 'date-fns/esm/fp/differenceInDays' {
  import { differenceInDays } from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/format' {
  import { format } from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/formatDistance' {
  import { formatDistance } from 'date-fns/esm/fp'
  export default formatDistance
}

declare module 'date-fns/esm/fp/formatDistanceWithOptions' {
  import { formatDistanceWithOptions } from 'date-fns/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/esm/fp/formatWithOptions' {
  import { formatWithOptions } from 'date-fns/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns/esm/fp/getHours' {
  import { getHours } from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/isDate' {
  import { isDate } from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isSaturday' {
  import { isSaturday } from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSunday' {
  import { isSunday } from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isValid' {
  import { isValid } from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/parse' {
  import { parse } from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/parseISO' {
  import { parseISO } from 'date-fns/esm/fp'
  export default parseISO
}

declare module 'date-fns/esm/fp/parseISOWithOptions' {
  import { parseISOWithOptions } from 'date-fns/esm/fp'
  export default parseISOWithOptions
}

declare module 'date-fns/esm/fp/parseWithOptions' {
  import { parseWithOptions } from 'date-fns/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns/esm/fp/sub' {
  import { sub } from 'date-fns/esm/fp'
  export default sub
}

declare module 'date-fns/esm/fp/add/index' {
  import { add } from 'date-fns/esm/fp'
  export default add
}

declare module 'date-fns/esm/fp/differenceInDays/index' {
  import { differenceInDays } from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/format/index' {
  import { format } from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/formatDistance/index' {
  import { formatDistance } from 'date-fns/esm/fp'
  export default formatDistance
}

declare module 'date-fns/esm/fp/formatDistanceWithOptions/index' {
  import { formatDistanceWithOptions } from 'date-fns/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/esm/fp/formatWithOptions/index' {
  import { formatWithOptions } from 'date-fns/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns/esm/fp/getHours/index' {
  import { getHours } from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/isDate/index' {
  import { isDate } from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isSaturday/index' {
  import { isSaturday } from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSunday/index' {
  import { isSunday } from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isValid/index' {
  import { isValid } from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/parse/index' {
  import { parse } from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/parseISO/index' {
  import { parseISO } from 'date-fns/esm/fp'
  export default parseISO
}

declare module 'date-fns/esm/fp/parseISOWithOptions/index' {
  import { parseISOWithOptions } from 'date-fns/esm/fp'
  export default parseISOWithOptions
}

declare module 'date-fns/esm/fp/parseWithOptions/index' {
  import { parseWithOptions } from 'date-fns/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns/esm/fp/sub/index' {
  import { sub } from 'date-fns/esm/fp'
  export default sub
}

declare module 'date-fns/esm/fp/add/index.js' {
  import { add } from 'date-fns/esm/fp'
  export default add
}

declare module 'date-fns/esm/fp/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/format/index.js' {
  import { format } from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/formatDistance/index.js' {
  import { formatDistance } from 'date-fns/esm/fp'
  export default formatDistance
}

declare module 'date-fns/esm/fp/formatDistanceWithOptions/index.js' {
  import { formatDistanceWithOptions } from 'date-fns/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/esm/fp/formatWithOptions/index.js' {
  import { formatWithOptions } from 'date-fns/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns/esm/fp/getHours/index.js' {
  import { getHours } from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/isDate/index.js' {
  import { isDate } from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isSaturday/index.js' {
  import { isSaturday } from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSunday/index.js' {
  import { isSunday } from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isValid/index.js' {
  import { isValid } from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/parse/index.js' {
  import { parse } from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/parseISO/index.js' {
  import { parseISO } from 'date-fns/esm/fp'
  export default parseISO
}

declare module 'date-fns/esm/fp/parseISOWithOptions/index.js' {
  import { parseISOWithOptions } from 'date-fns/esm/fp'
  export default parseISOWithOptions
}

declare module 'date-fns/esm/fp/parseWithOptions/index.js' {
  import { parseWithOptions } from 'date-fns/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns/esm/fp/sub/index.js' {
  import { sub } from 'date-fns/esm/fp'
  export default sub
}

// Regular Locales

declare module 'date-fns/locale' {
  const enUS: Locale
  namespace enUS {}

  const es: Locale
  namespace es {}
}

declare module 'date-fns/locale/en-US' {
  import { enUS } from 'date-fns/locale'
  export default enUS
}

declare module 'date-fns/locale/es' {
  import { es } from 'date-fns/locale'
  export default es
}

declare module 'date-fns/locale/en-US/index' {
  import { enUS } from 'date-fns/locale'
  export default enUS
}

declare module 'date-fns/locale/es/index' {
  import { es } from 'date-fns/locale'
  export default es
}

declare module 'date-fns/locale/en-US/index.js' {
  import { enUS } from 'date-fns/locale'
  export default enUS
}

declare module 'date-fns/locale/es/index.js' {
  import { es } from 'date-fns/locale'
  export default es
}

// ECMAScript Module Locales

declare module 'date-fns/esm/locale' {
  const enUS: Locale
  namespace enUS {}

  const es: Locale
  namespace es {}
}

declare module 'date-fns/esm/locale/en-US' {
  import { enUS } from 'date-fns/esm/locale'
  export default enUS
}

declare module 'date-fns/esm/locale/es' {
  import { es } from 'date-fns/esm/locale'
  export default es
}

declare module 'date-fns/esm/locale/en-US/index' {
  import { enUS } from 'date-fns/esm/locale'
  export default enUS
}

declare module 'date-fns/esm/locale/es/index' {
  import { es } from 'date-fns/esm/locale'
  export default es
}

declare module 'date-fns/esm/locale/en-US/index.js' {
  import { enUS } from 'date-fns/esm/locale'
  export default enUS
}

declare module 'date-fns/esm/locale/es/index.js' {
  import { es } from 'date-fns/esm/locale'
  export default es
}

// dateFns Global Interface

interface dateFns {
  add(date: any, duration: any): void

  differenceInDays(dateLeft: any, dateRight: any): void

  format(date: any, format: any, options: any): void

  formatDistance(date: any, baseDate: any, options: any): void

  getHours(date: any): void

  isDate(value: any): void

  isSaturday(date: any): void

  isSunday(date: any): void

  isValid(date: any): void

  parse(
    dateString: any,
    formatString: any,
    referenceDate: any,
    options: any
  ): void

  parseISO(argument: any, options: any): void

  sub(date: any, duration: any): void

  daysInWeek: number

  daysInYear: number

  maxTime: number

  millisecondsInWeek: number

  millisecondsInDay: number

  millisecondsInMinute: number

  millisecondsInHour: number

  millisecondsInSecond: number

  minTime: number

  minutesInYear: number

  minutesInMonth: number

  minutesInDay: number

  minutesInHour: number

  monthsInQuarter: number

  monthsInYear: number

  quartersInYear: number

  secondsInHour: number

  secondsInMinute: number

  secondsInDay: number

  secondsInWeek: number

  secondsInYear: number

  secondsInMonth: number

  secondsInQuarter: number
}
