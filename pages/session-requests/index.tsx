import SessionRequestsPage from "@/components/Admin/Pages/SessionRequestsPage"
import CalendarProvider from "@/providers/CalendarProvider"
import SessionRequestProvider from "@/providers/SessionRequestProvider"

const SessionRequests = () => (
  <SessionRequestProvider>
    <CalendarProvider>
      <SessionRequestsPage />
    </CalendarProvider>
  </SessionRequestProvider>
)

export default SessionRequests
