import { createContext, useContext, useState, useMemo, useEffect } from "react"
import { toast } from "react-toastify"
import getSessionRequests from "@/lib/firebase/getSessionRequests"
import updateSessionRequest from "@/lib/firebase/updateSessionRequest"
import getRoomsByStudioId from "@/lib/firebase/getRoomsByStudioId"
import sendSessionDeclined from "@/lib/sendSessionDeclined"
import addToSessionCalendar from "@/lib/addToSessionCalendar"
import { DEFAULT_STUDIO_ID } from "@/lib/consts/global"

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
  const [selectedRequest, setSelectedRequest] = useState(null)
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [roomList, setRoomList] = useState([]) as any

  const fetchSessionRequests = async () => {
    const studioId = DEFAULT_STUDIO_ID
    const newSessionRequests: any = await getSessionRequests(studioId)
    if ("error" in newSessionRequests) {
      return
    }

    newSessionRequests.sort((a, b) => (a.event.start.dateTime < b.event.start.dateTime ? -1 : 1))

    setSessionRequests(
      newSessionRequests.filter((request) => request.roomName === selectedRoom.name),
    )
  }

  const handleDecline = async (request) => {
    const response: any = await sendSessionDeclined({ request, studioNotes })
    if (response.status === 200) {
      toast.success("Declined Request")
      fetchSessionRequests()
    }
  }

  const handleAccept = async (request, type) => {
    if (type === "free") {
      updateSessionRequest({
        id: request.id,
        studioNotes,
        booked: true,
      })
      const startDateTime = request.event.start.dateTime
      const endDateTime = request.event.end.dateTime
      const response = await addToSessionCalendar(
        startDateTime,
        endDateTime,
        request.studio.calendarEmail,
      )

      if (response.error) {
        toast.error("add event to calendar failed")
      } else {
        toast.success("Accepted Request")
      }
    } else {
      updateSessionRequest({
        id: request.id,
        sessionPrice,
        engineerPrice,
        studioNotes,
      })
      toast.success("Accepted Request")
    }
  }

  useEffect(() => {
    const init = async () => {
      const studioId = DEFAULT_STUDIO_ID
      const response = await getRoomsByStudioId(studioId)
      const { error } = response as any

      if (error) return

      setRoomList(response)
      setSelectedRoom(response[0])
    }

    init()
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
      setSelectedRoom,
      selectedRoom,
      roomList,
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
      setSelectedRoom,
      selectedRoom,
      roomList,
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
