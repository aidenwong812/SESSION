const CALENDAR_CONFIG = {
  clientId: process.env.NEXT_PUBLIC_CALENDAR_CLIENT_ID,
  apiKey: process.env.NEXT_PUBLIC_CALENDAR_API_KEY,
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
}

export default CALENDAR_CONFIG
