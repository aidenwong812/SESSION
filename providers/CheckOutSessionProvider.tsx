import { createContext, useContext, useState, useMemo, useCallback, useEffect } from "react"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import { STEPS } from "@/lib/consts/checkout"
import getSessionByRequestId from "@/lib/firebase/getSessionByRequestId"
import addToSessionCalendar from "@/lib/addToSessionCalendar"
import { useCalendar } from "./CalendarProvider"

const CheckOutSessionContext = createContext(null)

const CheckOutSessionProvider = ({ children }) => {
  const [curStep, setCurStep] = useState(STEPS.PAYMENT_CHECKOUT)
  const [sessionData, setSessionData] = useState(null)
  const [studioCalendarTimeZone, setStudioCalendarTimeZone] = useState(null)
  const router = useRouter()
  const { addEventToCalendar } = useCalendar()
  const [loading, setLoading] = useState(false)

  const sessionId = router.query.id

  const bookSession = async () => {
    setLoading(true)
    const startDateTime = sessionData.event.start.dateTime
    const endDateTime = sessionData.event.end.dateTime
    const response: any = await addToSessionCalendar(
      startDateTime,
      endDateTime,
      sessionData.studio.calendarEmail,
    )

    if (response.error) {
      toast.error("add event to calendar failed")
      setLoading(false)
      return
    }
    setStudioCalendarTimeZone(response)
    setLoading(false)
    setCurStep(STEPS.BOOKED_SUCCESS)
  }

  const addToCalendar = async () => {
    setLoading(true)
    const startDateTime = sessionData.event.start.dateTime
    const endDateTime = sessionData.event.end.dateTime

    const response: any = await addEventToCalendar(
      startDateTime,
      endDateTime,
      studioCalendarTimeZone,
    )

    if (response?.error) {
      setLoading(false)
      return
    }
    setLoading(false)

    if (!response) {
      toast.error("add event failed")
      return
    }
    router.push("/booktype")
  }

  const getSessionData = useCallback(async () => {
    if (!sessionId) return
    const response: any = await getSessionByRequestId(sessionId)
    if (response.error) {
      toast.error("session data is not existed!")
      router.push("/booktype")
      return
    }

    setSessionData(response)
  }, [sessionId])

  useEffect(() => {
    getSessionData()
  }, [getSessionData])

  const value = useMemo(
    () => ({
      curStep,
      setCurStep,
      sessionData,
      bookSession,
      addToCalendar,
      loading,
      setLoading,
    }),
    [curStep, setCurStep, sessionData, bookSession],
  )

  return <CheckOutSessionContext.Provider value={value}>{children}</CheckOutSessionContext.Provider>
}

export const useCheckOutSession = () => {
  const context = useContext(CheckOutSessionContext)
  if (!context) {
    throw new Error("useCheckOutSession must be used within a CheckOutSessionProvider")
  }
  return context
}

export default CheckOutSessionProvider
