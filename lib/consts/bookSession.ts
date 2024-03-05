import JoiBase from "joi"

export enum STEPS {
  CHOOSE_ROOM = "CHOOSE_ROOM",
  CHOOSE_DATE = "CHOOSE_DATE",
  CHOOSE_TIME = "CHOOSE_TIME",
  CHOOSE_TIME_START = "CHOOSE_TIME_START",
  CHOOSE_TIME_END = "CHOOSE_TIME_END",
  ADD_DETAILS = "ADD_DETAILS",
  SUCCESS_BOOKED = "SUCCESS_BOOKED",
}

export const availableTimes = [
  "10:00AM",
  "11:00AM",
  "12:00PM",
  "01:00PM",
  "02:00PM",
  "03:00PM",
  "04:00PM",
  "05:00PM",
  "06:00PM",
  "07:00PM",
  "08:00PM",
  "09:00PM",
  "10:00PM",
  "11:00PM",
  "12:00AM",
  "01:00AM",
]

export const eventTimesInFirestore = [
  "10:00:00",
  "11:00:00",
  "12:00:00",
  "13:00:00",
  "14:00:00",
  "15:00:00",
  "16:00:00",
  "17:00:00",
  "18:00:00",
  "19:00:00",
  "20:00:00",
  "21:00:00",
  "22:00:00",
  "23:00:00",
  "00:00:00",
  "01:00:00",
]

export const validation = JoiBase.object({
  sessionDetail: JoiBase.string().messages({
    "string.empty": `Session detail cannot be empty`,
  }),
  bandName: JoiBase.string().messages({
    "string.empty": `Your Band Name cannot be empty`,
  }),
})
