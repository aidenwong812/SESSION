export enum PAYMENTS {
  STRIPE = "stripe",
  PAYPAL = "paypal",
}

export const instrumentsOptions = [
  {
    value: "vocals",
    label: "Vocals",
  },
  {
    label: "Acoustic Guitar",
    value: "acoustic_guitarx",
  },
  {
    value: "eletric_guitar",
    label: "Electric Guitar",
  },
  {
    value: "bass_guitar",
    label: "Bass Guitar",
  },
  {
    value: "piano",
    label: "Piano",
  },
  {
    value: "synthesizer",
    label: "Synthesizer",
  },
  {
    value: "drum_kit",
    label: "Drum Kit",
  },
  {
    value: "violin",
    label: "Violin",
  },
  {
    value: "cello",
    label: "Cello",
  },
  {
    value: "flute",
    label: "Flute",
  },
  {
    value: "saxophone",
    label: "Saxophone",
  },
  {
    value: "trumpet",
    label: "Trumpet",
  },
  {
    value: "trombone",
    label: "Trombone",
  },
  {
    value: "organ",
    label: "Organ",
  },
  {
    value: "congas",
    label: "Congas",
  },
  {
    value: "tambourine",
    label: "Tambourine",
  },
  {
    value: "shakers",
    label: "Shakers",
  },
  {
    value: "midi",
    label: "MIDI Controller",
  },
  {
    value: "harmonica",
    label: "Harmonica",
  },
  {
    value: "sitar",
    label: "Sitar",
  },
  {
    value: "accordion",
    label: "Accordion",
  },
]

export const ADMIN_EMAIL = "tech.eng.me@gmail.com"

export const ONE_DAY_MILLISECONDS = 24 * 60 * 60 * 1000
export const ONE_HOUR_MILLISECONDS = 60 * 60 * 1000
export const TOTAL_SESSION_DAY_PERIOD_SECONDS = 60 * 60 * 11
export const TOTAL_DAYS_PER_WEEK = 7
export const TOTAL_MONTH_COUNT = 12
export const WEEKDAYS_LABELS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
export const FULL_WEEKDAYS_LABELS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]
export const FULL_MONTH_LABELS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
export const SHORT_MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]
export const MONTH_CALENDAR_DAY_COUNT = 42
export const MAXIMUM_MONTH = 12
export const MINIMUM_MONTH = 1
