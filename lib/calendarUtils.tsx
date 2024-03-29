import { toast } from "react-toastify"
import ApiCalendar from "react-google-calendar-api"
import handleTxError from "./handleTxError"
import shareCalendarWithSession from "./shareCalendarWithSession"
import addAdminCalendarToStudio from "./firebase/addAdminCalendarToStudio"
import CALENDAR_CONFIG from "./consts/google-calendar-config"

const apiCalendar = new ApiCalendar(CALENDAR_CONFIG)

const grantToCalendar = async (studioId: string, studioName: string): Promise<void> => {
  try {
    let response: any = await apiCalendar.handleAuthClick()

    response = await shareCalendarWithSession(response.access_token)

    if (response.error) {
      toast.error("Failed to share calendar.")
      return
    }

    const { calendarEmail }: { calendarEmail: string } = response
    response = await addAdminCalendarToStudio(studioId, studioName, calendarEmail)

    if (response?.error) {
      toast.error("Failed to add calendar.")
      return
    }

    toast.success("Connected calendar!")
  } catch (error) {
    handleTxError(error)
  }
}

export default grantToCalendar
