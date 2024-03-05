import { JWT } from "google-auth-library"
import SESSION_CALENDAR_CREDENTIAL from "./consts/session-calendar-credential"

const getCalendarJWTClient = async () => {
  const SCOPES = ["https://www.googleapis.com/auth/calendar"]

  const jwtClient = new JWT({
    email: SESSION_CALENDAR_CREDENTIAL.client_email,
    key: SESSION_CALENDAR_CREDENTIAL.private_key,
    scopes: SCOPES,
  })

  await jwtClient.authorize()

  return jwtClient
}

export default getCalendarJWTClient
