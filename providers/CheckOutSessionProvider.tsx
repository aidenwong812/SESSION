import { createContext, useContext, useState, useMemo, useCallback, useEffect } from "react"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import { STEPS } from "@/lib/consts/checkout"
import getSessionByRequestId from "@/lib/firebase/getSessionByRequestId"
import addToSessionCalendar from "@/lib/addToSessionCalendar"

const CheckOutSessionContext = createContext(null)

const CheckOutSessionProvider = ({ children }) => {
  const [curStep, setCurStep] = useState(STEPS.PAYMENT_CHECKOUT)
  const [sessionData, setSessionData] = useState(null)
  const router = useRouter()
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
    setLoading(false)
    setCurStep(STEPS.BOOKED_SUCCESS)
  }

  const getSessionData = useCallback(async () => {
    if (!sessionId) return
    const response: any = await getSessionByRequestId(sessionId)
    if (response.error) {
      toast.error("session data is not existed!")
      router.push("/mkDfxshbbVnhsHU4CVag/booktype")
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
