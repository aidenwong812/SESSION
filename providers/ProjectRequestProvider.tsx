import { createContext, useContext, useState, useMemo, useEffect } from "react"
import { toast } from "react-toastify"
import getProjectRequests from "@/lib/firebase/getProjectRequests"
import updateProjectRequest from "@/lib/firebase/updateProjectRequest"
import sendProjectDeclined from "@/lib/sendProjectDeclined"
import sendProjectAccepted from "@/lib/sendProjectAccepted"
import { DEFAULT_STUDIO_ID } from "@/lib/consts/global"
import { useAuth } from "./AuthProvider"

export enum PROJECT_REQUEST_STATUS {
  INITIAL = "INITIAL",
  SUCCESS = "SUCCESS",
}

const ProjectRequestContext = createContext(null)

const ProjectRequestProvider = ({ children }) => {
  const [confirmStatus, setConfirmStatus] = useState(PROJECT_REQUEST_STATUS.INITIAL)
  const [projectPrice, setProjectPrice] = useState<number>(0)
  const [projectRequests, setProjectRequests] = useState([])
  const [studioNotes, setStudioNotes] = useState("")
  const [selectedRequest, setSelectedRequest] = useState(null)
  const { userData } = useAuth()

  const fetchProjectRequests = async () => {
    const studioId = userData?.studioId || DEFAULT_STUDIO_ID
    const newProjectRequests = await getProjectRequests(studioId)
    if ("error" in newProjectRequests) {
      return
    }
    setProjectRequests(newProjectRequests)
  }

  const handleDecline = async (request) => {
    const response: any = await sendProjectDeclined({ request, studioNotes })
    if (response.status === 200) {
      toast.success("Declined Project")
      fetchProjectRequests()
    }
  }

  const handleAccept = async (request) => {
    updateProjectRequest({
      id: request.id,
      projectPrice,
      studioNotes,
    })

    const response: any = await sendProjectAccepted({ request: selectedRequest, studioNotes })

    if (response.status) {
      toast.success("Accepted Project")
    }
  }

  useEffect(() => {
    fetchProjectRequests()
  }, [])

  const value = useMemo(
    () => ({
      confirmStatus,
      setConfirmStatus,
      projectPrice,
      setProjectPrice,
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
      projectPrice,
      setProjectPrice,
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
