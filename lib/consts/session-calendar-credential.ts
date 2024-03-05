const SESSION_CALENDAR_CREDENTIAL = {
  private_key_id: process.env.NEXT_PUBLIC_CALENDAR_PRIVATE_KEY_ID,
  private_key: process.env.NEXT_PUBLIC_CALENDAR_PRIVATE_KEY,
  project_id: "session-409413",
  client_email: "session@session-409413.iam.gserviceaccount.com",
  client_id: "101559862821261002763",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/session%40session-409413.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
}

export default SESSION_CALENDAR_CREDENTIAL
