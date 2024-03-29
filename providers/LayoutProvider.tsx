import { createContext, useContext, useState, useMemo, useEffect } from "react"
import { useRouter } from "next/router"
import getProjectByRequestId from "@/lib/firebase/getProjectByRequestId"
import getStudioByStudioId from "@/lib/firebase/getStudioByStudioId"
import getProjectByUser from "@/lib/firebase/getProjectByUser"
import { useAuth } from "./AuthProvider"

const LayoutContext = createContext(null)

const LayoutProvider = ({ children }) => {
  const [studio, setStudio] = useState<any>({})
  const [activeProject, setActiveProject] = useState<any>({})
  const { userData } = useAuth()
  const { query } = useRouter()
  const studioId = query.studio
  const projectId = query.id

  useEffect(() => {
    const init = async () => {
      if (projectId) {
        const response: any = await getProjectByRequestId(projectId)
        const res = await getStudioByStudioId(response.studioId)
        if (!res.error) setStudio(res)
      } else {
        const res = await getStudioByStudioId(studioId)
        if (!res.error) setStudio(res)
      }

      if (projectId === undefined && userData) {
        const project = await getProjectByUser({ studioId, email: userData.email })
        if (project.length > 0) setActiveProject(project[0])
        const res = await getStudioByStudioId(userData.studioId)
        if (!res.error) setStudio(res)
      }
    }
    init()
  }, [studioId, projectId, userData])

  const value = useMemo(
    () => ({
      studio,
      activeProject,
    }),
    [studio, activeProject],
  )

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
}

export const useLayout = () => {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider")
  }
  return context
}

export default LayoutProvider
