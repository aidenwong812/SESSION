import DashboardPage from "@/components/Admin/Pages/DashboardPage"
import DashboardProvider from "@/providers/DashboardProvider"

const Dashboard = () => (
  <DashboardProvider>
    <DashboardPage />
  </DashboardProvider>
)

export default Dashboard
