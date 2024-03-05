import SessionRequestsPage from "@/components/Admin/Pages/SessionRequestsPage"
import SessionRequestProvider from "@/providers/SessionRequestProvider"

const SessionRequests = () => (
  <SessionRequestProvider>
    <SessionRequestsPage />
  </SessionRequestProvider>
)

export default SessionRequests
