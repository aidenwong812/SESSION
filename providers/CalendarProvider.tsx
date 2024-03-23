import React, { createContext, useContext, useMemo } from "react"
import ApiCalendar from "react-google-calendar-api"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
import handleTxError from "@/lib/handleTxError"
import CALENDAR_CONFIG from "@/lib/consts/google-calendar-config"
import addAdminCalendarToStudio from "@/lib/firebase/addAdminCalendarToStudio"
import shareCalendarWithSession from "@/lib/shareCalendarWithSession"
import getStudioCalendarEvents from "@/lib/getStudioCalendarEvents"
import { DEFAULT_STUDIO_ID } from "@/lib/consts/global"

const CalendarContext = createContext(null)

const CalendarProvider = ({ children }) => {
  const router = useRouter()

  const apiCalendar = useMemo(() => {
    if (CALENDAR_CONFIG) return new ApiCalendar(CALENDAR_CONFIG)
  }, [CALENDAR_CONFIG])

  const addEventToCalendar = async (startDateTime, endDateTime, timeZone) => {
    try {
      await apiCalendar.handleAuthClick()

      const eventDetails: any = {
        summary: "Session",
        start: {
          dateTime: startDateTime,
          timeZone,
        },
        end: {
          dateTime: endDateTime,
          timeZone,
        },
      }

      await apiCalendar.createEvent(eventDetails)
      return true
    } catch (error) {
      handleTxError(error)
      return { error }
    }
  }

  const grantToCalendar = async (studioId, studioName) => {
    try {
      let response: any = await apiCalendar.handleAuthClick()

      response = await shareCalendarWithSession(response.access_token)

      if (response.error) {
        toast.error("share calendar is failed")
        return
      }

      const { calendarEmail } = response
      response = await addAdminCalendarToStudio(studioId, studioName, calendarEmail)

      if (response?.error) {
        toast.error("add calendar is failed")
        return
      }

      router.push(`/${studioId || DEFAULT_STUDIO_ID}/booktype`)
    } catch (error) {
      handleTxError(error)
      return { error }
    }
  }

  const getCalendarEvents = async (calendarId, startDay, endDay) => {
    const response = await getStudioCalendarEvents(calendarId, startDay, endDay)
    return response
  }

  const value = useMemo(
    () => ({
      grantToCalendar,
      getCalendarEvents,
      addEventToCalendar,
    }),
    [grantToCalendar, getCalendarEvents, addEventToCalendar],
  )

  return <CalendarContext.Provider value={value}>{children}</CalendarContext.Provider>
}

export const useCalendar = () => {
  const context = useContext(CalendarContext)
  if (!context) {
    throw new Error("useCalendar must be used within a CalendarProvider")
  }
  return context
}

export default CalendarProvider
