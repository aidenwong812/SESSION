import { createContext, useContext, useState, useMemo, useEffect } from "react"
import { toast } from "react-toastify"
import getSessionRequests from "@/lib/firebase/getSessionRequests"
import sendSessionDeclined from "@/lib/sendSessionDeclined"
import addToSessionCalendar from "@/lib/addToSessionCalendar"
import getSessionByRequestId from "@/lib/firebase/getSessionByRequestId"

export enum SESSION_REQUEST_STATUS {
  INITIAL = "INITIAL",
  INPUT_PRICE = "INPUT_PRICE",
  FREE = "FREE",
  SUCCESS = "SUCCESS",
}

const SessionRequestContext = createContext(null)

const SessionRequestProvider = ({ children }) => {
  const [confirmStatus, setConfirmStatus] = useState(SESSION_REQUEST_STATUS.INITIAL)
  const [sessionPrice, setSessionPrice] = useState<number>(0)
  const [engineerPrice, setEngineerPrice] = useState<number>(0)
  const [sessionRequests, setSessionRequests] = useState([])
  const [studioNotes, setStudioNotes] = useState("")
  const [selectedRequest, setSelectedRequest] = useState("")

  const fetchSessionRequests = async () => {
    const newSessionRequests = await getSessionRequests()
    if ("error" in newSessionRequests) {
      return
    }
    setSessionRequests(newSessionRequests)
  }

  const handleDecline = async (requestId) => {
    const response: any = await sendSessionDeclined({ requestId, studioNotes })
    if (response.status === 200) {
      toast.success("Declined Request")
      fetchSessionRequests()
    }
  }

  const handleAccept = async (requestId) => {
    const sessionData: any = await getSessionByRequestId(requestId)
    const startDateTime = sessionData.event.start.dateTime
    const endDateTime = sessionData.event.end.dateTime
    const response = await Promise.all([
      await addToSessionCalendar(startDateTime, endDateTime, sessionData.studio.calendarEmail),
      await addToSessionCalendar(startDateTime, endDateTime, sessionData.email),
    ])

    if (response[0].error || response[1].error) {
      toast.error("add event to calendar failed")
    }
  }

  useEffect(() => {
    fetchSessionRequests()
  }, [])

  const value = useMemo(
    () => ({
      confirmStatus,
      setConfirmStatus,
      sessionPrice,
      setSessionPrice,
      engineerPrice,
      setEngineerPrice,
      studioNotes,
      setStudioNotes,
      selectedRequest,
      setSelectedRequest,
      sessionRequests,
      handleDecline,
      handleAccept,
      fetchSessionRequests,
    }),
    [
      confirmStatus,
      setConfirmStatus,
      sessionPrice,
      setSessionPrice,
      engineerPrice,
      setEngineerPrice,
      studioNotes,
      setStudioNotes,
      selectedRequest,
      setSelectedRequest,
      sessionRequests,
      handleDecline,
      handleAccept,
      fetchSessionRequests,
    ],
  )

  return <SessionRequestContext.Provider value={value}>{children}</SessionRequestContext.Provider>
}

export const useSessionRequest = () => {
  const context = useContext(SessionRequestContext)
  if (!context) {
    throw new Error("useSessionRequest must be used within a StudioProvider")
  }
  return context
}

export default SessionRequestProvider
