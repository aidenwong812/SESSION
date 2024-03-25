import { createContext, useContext, useState, useMemo, useCallback, useEffect } from "react"
import getRoomsByStudioId from "@/lib/firebase/getRoomsByStudioId"
import getStudioByStudioId from "@/lib/firebase/getStudioByStudioId"
import { useAuth } from "./AuthProvider"

const StudioInfoContext = createContext(null)

const StudioInfoProvider = ({ children }) => {
  const [studio, setStudio] = useState(null)
  const [roomList, setRoomList] = useState([])
  const { userData } = useAuth()

  const getStudio = useCallback(async () => {
    if (userData) {
      const response: any = await getStudioByStudioId(userData.studioId)

      if (response.error) {
        setStudio(null)
        return
      }
      setStudio(response)
    }
  }, [userData])

  const getAllRooms = useCallback(async () => {
    const response: any = await getRoomsByStudioId(studio?.id)

    if (response.error) {
      setRoomList([])
      return
    }
    setRoomList(response)
  }, [studio])

  useEffect(() => {
    getStudio()
  }, [getStudio])

  useEffect(() => {
    getAllRooms()
  }, [studio])

  const value = useMemo(
    () => ({
      roomList,
      studio,
    }),
    [roomList, studio],
  )

  return <StudioInfoContext.Provider value={value}>{children}</StudioInfoContext.Provider>
}

export const useStudioInfo = () => {
  const context = useContext(StudioInfoContext)
  if (!context) {
    throw new Error("useStudioInfo must be used within a StudioInfoProvider")
  }
  return context
}

export default StudioInfoProvider
