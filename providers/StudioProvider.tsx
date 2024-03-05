import { createContext, useContext, useState, useMemo, useCallback, useEffect } from "react"
import getStudios from "@/lib/firebase/getStudios"

const StudioContext = createContext(null)

const StudioProvider = ({ children }) => {
  const [studioList, setStudioList] = useState(null)

  const getAllStudios = useCallback(async () => {
    const response: any = await getStudios()

    if (response.error) {
      setStudioList([])
      return
    }
    setStudioList(response)
  }, [])

  useEffect(() => {
    getAllStudios()
  }, [getAllStudios])

  const value = useMemo(
    () => ({
      studioList,
    }),
    [studioList],
  )

  return <StudioContext.Provider value={value}>{children}</StudioContext.Provider>
}

export const useSessionStudio = () => {
  const context = useContext(StudioContext)
  if (!context) {
    throw new Error("useSessionStudio must be used within a StudioProvider")
  }
  return context
}

export default StudioProvider
