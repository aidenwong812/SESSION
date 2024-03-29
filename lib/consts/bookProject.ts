import JoiBase from "joi"

export const validation = {
  bandName: JoiBase.string().messages({
    "string.empty": `Your Band Name cannot be empty`,
  }),
  projectName: JoiBase.string().messages({
    "string.empty": `Your Project Name cannot be empty`,
  }),
  projectDesc: JoiBase.string().messages({
    "string.empty": `Please describe your Project. Enter at least X characters to describe`,
  }),
  genre: JoiBase.string().messages({
    "string.empty": `Please select genre`,
  }),
  instrument: JoiBase.string().messages({
    "string.empty": `Please select instrument`,
  }),
  timeframe: JoiBase.string().messages({
    "string.empty": `Please select timeframe`,
  }),
}

export enum STEPS {
  ADD_DETAIL = "add_detail",
  ADD_TRACKLIST = "add_tracklist",
  PROJECT_SUMMARY = "project_summary",
  SUCCESS = "booked_project_success",
}

export const timeframeOptions = [
  {
    value: "2-weeks",
    label: "Within 2 weeks",
  },
  {
    value: "a-month",
    label: "Within a month",
  },
  {
    value: "2-months",
    label: "Within 2 months",
  },
  {
    value: "3-months",
    label: "Within 3 months",
  },
  {
    value: "6-months",
    label: "Within 6 months",
  },
  {
    value: "next-year",
    label: "Within the next year",
  },
]

export const genreOptions = [
  "Pop",
  "Rock",
  "Hip-Hop/Rap",
  "Electronic Dance",
  "R&B/Soul",
  "Classical",
  "Acoustic",
  "Singer-Songwriter",
]
