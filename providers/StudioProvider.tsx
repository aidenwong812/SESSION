import { createContext, useContext, useState, useMemo, useCallback, useEffect } from "react"
import { useRouter } from "next/router"
import getStudios from "@/lib/firebase/getStudios"
import getRoomsByStudioId from "@/lib/firebase/getRoomsByStudioId"

const StudioContext = createContext(null)

const StudioProvider = ({ children }) => {
  const [studioList, setStudioList] = useState(null)
  const [roomList, setRoomList] = useState(null)
  const { query } = useRouter()

  const getAllStudios = useCallback(async () => {
    const response: any = await getStudios()

    if (response.error) {
      setStudioList([])
      return
    }
    setStudioList(response)
  }, [])

  const getAllRooms = useCallback(async (studioId) => {
    const response: any = await getRoomsByStudioId(studioId)

    if (response.error) {
      setRoomList([])
      return
    }
    setRoomList(response)
  }, [])

  useEffect(() => {
    getAllStudios()
    getAllRooms(query.studio)
  }, [getAllStudios, getAllRooms, query])

  const value = useMemo(
    () => ({
      roomList,
      studioList,
    }),
    [roomList, studioList],
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
