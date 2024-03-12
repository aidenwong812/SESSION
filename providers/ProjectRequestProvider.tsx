import { createContext, useContext, useState, useMemo, useEffect } from "react"
import { toast } from "react-toastify"
import getProjectRequests from "@/lib/firebase/getProjectRequests"
import sendSessionDeclined from "@/lib/sendSessionDeclined"
import addToSessionCalendar from "@/lib/addToSessionCalendar"
import updateSessionRequest from "@/lib/firebase/updateSessionRequest"

export enum PROJECT_REQUEST_STATUS {
  INITIAL = "INITIAL",
  INPUT_PRICE = "INPUT_PRICE",
  FREE = "FREE",
  SUCCESS = "SUCCESS",
}

const ProjectRequestContext = createContext(null)

const ProjectRequestProvider = ({ children }) => {
  const [confirmStatus, setConfirmStatus] = useState(PROJECT_REQUEST_STATUS.INITIAL)
  const [sessionPrice, setSessionPrice] = useState<number>(0)
  const [engineerPrice, setEngineerPrice] = useState<number>(0)
  const [projectRequests, setProjectRequests] = useState([])
  const [studioNotes, setStudioNotes] = useState("")
  const [selectedRequest, setSelectedRequest] = useState(null)

  const fetchProjectRequests = async () => {
    const newProjectRequests = await getProjectRequests()
    if ("error" in newProjectRequests) {
      return
    }
    setProjectRequests(newProjectRequests)
  }

  const handleDecline = async (request) => {
    const response: any = await sendSessionDeclined({ request, studioNotes })
    if (response.status === 200) {
      toast.success("Declined Request")
      fetchProjectRequests()
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
    fetchProjectRequests()
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
      projectRequests,
      handleDecline,
      handleAccept,
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
      projectRequests,
      handleDecline,
      handleAccept,
    ],
  )

  return <ProjectRequestContext.Provider value={value}>{children}</ProjectRequestContext.Provider>
}

export const useProjectRequest = () => {
  const context = useContext(ProjectRequestContext)
  if (!context) {
    throw new Error("useProjectRequest must be used within a ProjectRequestProvider")
  }
  return context
}

export default ProjectRequestProvider
