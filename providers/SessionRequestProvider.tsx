import { createContext, useContext, useState, useMemo, useEffect } from "react"
import { toast } from "react-toastify"
import getSessionRequests from "@/lib/firebase/getSessionRequests"
import sendSessionDeclined from "@/lib/sendSessionDeclined"
import addToSessionCalendar from "@/lib/addToSessionCalendar"
import updateSessionRequest from "@/lib/firebase/updateSessionRequest"

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

  const handleDecline = async (request) => {
    const response: any = await sendSessionDeclined({ request, studioNotes })
    if (response.status === 200) {
      toast.success("Declined Request")
      fetchSessionRequests()
    }
  }

  const handleAccept = async (request) => {
    updateSessionRequest({
      id: request.id,
      sessionPrice,
      engineerPrice,
      studioNotes,
    })
    const startDateTime = request.event.start.dateTime
    const endDateTime = request.event.end.dateTime
    const response = await Promise.all([
      await addToSessionCalendar(startDateTime, endDateTime, request.studio.calendarEmail),
      await addToSessionCalendar(startDateTime, endDateTime, request.email),
    ])

    if (response[0].error || response[1].error) {
      toast.error("add event to calendar failed")
    } else {
      toast.success("Accepted Request")
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
