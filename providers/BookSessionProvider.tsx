import { createContext, useContext, useState, useMemo } from "react"
import { toast } from "react-toastify"
import { STEPS } from "@/lib/consts/bookSession"
import convertDecimalDigit from "@/lib/convetDecimalDigit"
import convertTo24HourFormat from "@/lib/convertTo24HourFormat"
import requestSession from "@/lib/firebase/requestSession"
import { ONE_DAY_MILLISECONDS } from "@/lib/consts/global"
import { useAuth } from "./AuthProvider"
import useInstruments from "../hooks/useInstruments"

const BookSessionContext = createContext(null)

const BookSessionProvider = ({ children }) => {
  const [curStep, setCurStep] = useState(STEPS.CHOOSE_ROOM)
  const totalStep = 3
  const [studioOnModal, setStudioOnModal] = useState(null)
  const [isOpenEquipmentModal, setIsOpenEquipmentModal] = useState(false)
  const [selectedStudio, setSelectedStudio] = useState(null)
  const [sessionDetail, setSessionDetail] = useState("")
  const [comingPeople, setComingPeople] = useState(1)
  const [isEngineerNeeded, setIsEngineerNeeded] = useState(true)
  const [bandName, setBandName] = useState("")
  const isBookedOnProject = false
  const instruments = useInstruments()
  const [loading, setLoading] = useState(false)
  const { userData } = useAuth()

  const request = async (startTime, endTime, selectedDay, studioId) => {
    setLoading(true)
    const startDate = `${selectedDay.year}-${convertDecimalDigit(
      selectedDay.month,
    )}-${convertDecimalDigit(selectedDay.day)}T${convertTo24HourFormat(startTime)}:00`

    const shouldNextDay = endTime === "12:00AM" || endTime === "01:00AM"

    const endUTCTime =
      new Date(`${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`).getTime() +
      ONE_DAY_MILLISECONDS
    const endDay = new Date(endUTCTime)

    const endYear = shouldNextDay ? endDay.getFullYear() : selectedDay.year
    const endMonth = shouldNextDay ? endDay.getMonth() + 1 : selectedDay.month
    const endDate = shouldNextDay ? endDay.getDate() : selectedDay.day

    const endDateTime = `${endYear}-${convertDecimalDigit(endMonth)}-${convertDecimalDigit(
      endDate,
    )}T${convertTo24HourFormat(endTime)}:00`

    const eventDetails = {
      summary: "Session",
      start: {
        dateTime: startDate,
      },
      end: {
        dateTime: endDateTime,
      },
    }

    const response: any = await requestSession(
      userData.email,
      bandName,
      instruments.instruments,
      sessionDetail,
      comingPeople,
      isEngineerNeeded,
      selectedDay,
      eventDetails,
      studioId,
    )

    if (response.error) {
      toast.error("add session failed")
      return
    }
    setCurStep(STEPS.SUCCESS_BOOKED)
    setLoading(false)
  }

  const openEquipmentModal = (data) => {
    setStudioOnModal(data)
    setIsOpenEquipmentModal(true)
  }

  const value = useMemo(
    () => ({
      curStep,
      setCurStep,
      totalStep,
      setStudioOnModal,
      studioOnModal,
      isOpenEquipmentModal,
      setIsOpenEquipmentModal,
      openEquipmentModal,
      selectedStudio,
      setSelectedStudio,
      sessionDetail,
      setSessionDetail,
      isEngineerNeeded,
      setIsEngineerNeeded,
      comingPeople,
      setComingPeople,
      ...instruments,
      bandName,
      setBandName,
      isBookedOnProject,
      loading,
      request,
      setLoading,
    }),
    [
      curStep,
      setCurStep,
      totalStep,
      setStudioOnModal,
      studioOnModal,
      isOpenEquipmentModal,
      setIsOpenEquipmentModal,
      openEquipmentModal,
      selectedStudio,
      setSelectedStudio,
      sessionDetail,
      setSessionDetail,
      isEngineerNeeded,
      setIsEngineerNeeded,
      comingPeople,
      setComingPeople,
      instruments,
      bandName,
      setBandName,
      isBookedOnProject,
      loading,
      request,
      setLoading,
    ],
  )

  return <BookSessionContext.Provider value={value}>{children}</BookSessionContext.Provider>
}

export const useBookSession = () => {
  const context = useContext(BookSessionContext)
  if (!context) {
    throw new Error("useBookSession must be used within a BookSessionProvider")
  }
  return context
}

export default BookSessionProvider
