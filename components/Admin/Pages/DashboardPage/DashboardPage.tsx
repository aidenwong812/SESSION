import UpcomingCalendarProvider from "@/providers/UpcomingCalendarProvider"
import Layout from "../../../Layout"
import GuestSection from "./GuestSection"
import Notification from "../Notification"
import PageVisits from "./PageVisits"
import Percentages from "./Percentages"
import Revenue from "./Revenue"
import RoomRevenue from "./RoomRevenue"
import UpcomingCalendar from "./UpcomingCalendar"

const DashboardPage = () => (
  <Layout type="admin">
    <div className="px-[20px]">
      <Notification />
      <GuestSection />
      <div className="mt-[40px] grid grid-cols-2 gap-x-[40px]">
        <div className="grid grid-cols-2 gap-x-[40px]">
          <Revenue />
          <PageVisits />
        </div>
        <Percentages />
      </div>
      <div className="mt-[40px] grid grid-cols-4 gap-x-[40px]">
        <div className="col-span-1">
          <RoomRevenue />
        </div>
        <div className="col-span-3">
          <UpcomingCalendarProvider>
            <UpcomingCalendar />
          </UpcomingCalendarProvider>
        </div>
      </div>
    </div>
  </Layout>
)

export default DashboardPage
