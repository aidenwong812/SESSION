import DashboardPage from "@/components/Admin/Pages/DashboardPage"
import AdminCalendarProvider from "@/providers/AdminCalendarProvider"
import DashboardProvider from "@/providers/DashboardProvider"
import PaymentProvider from "@/providers/PaymentProvider"

const Dashboard = () => (
  <PaymentProvider>
    <DashboardProvider>
      <AdminCalendarProvider>
        <DashboardPage />
      </AdminCalendarProvider>
    </DashboardProvider>
  </PaymentProvider>
)

export default Dashboard
