import { createContext, useContext, useState, useMemo, useCallback, useEffect } from "react"
import { useRouter } from "next/router"
import getRoomsByStudioId from "@/lib/firebase/getRoomsByStudioId"

const StudioContext = createContext(null)

const StudioProvider = ({ children }) => {
  const [roomList, setRoomList] = useState(null)
  const { query } = useRouter()

  const getAllRooms = useCallback(async (studioId) => {
    const response: any = await getRoomsByStudioId(studioId)

    if (response.error) {
      setRoomList([])
      return
    }
    setRoomList(response)
  }, [])

  useEffect(() => {
    getAllRooms(query.studio)
  }, [getAllRooms, query])

  const value = useMemo(
    () => ({
      roomList,
    }),
    [roomList],
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
