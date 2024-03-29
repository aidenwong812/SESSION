import DashboardPage from "@/components/Admin/Pages/DashboardPage"
import AdminCalendarProvider from "@/providers/AdminCalendarProvider"
import DashboardProvider from "@/providers/DashboardProvider"

const Dashboard = () => (
  <DashboardProvider>
    <AdminCalendarProvider>
      <DashboardPage />
    </AdminCalendarProvider>
  </DashboardProvider>
)

export default Dashboard
