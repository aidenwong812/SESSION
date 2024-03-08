import SessionRequestsPage from "@/components/Admin/Pages/SessionRequestsPage"
import CalendarProvider from "@/providers/CalendarProvider"
import SessionRequestProvider from "@/providers/SessionRequestProvider"

const SessionRequests = () => (
  <CalendarProvider>
    <SessionRequestProvider>
      <SessionRequestsPage />
    </SessionRequestProvider>
  </CalendarProvider>
)

export default SessionRequests
