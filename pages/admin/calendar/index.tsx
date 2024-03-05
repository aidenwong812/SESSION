import CalendarToStudioPage from "@/components/Admin/Pages/CalendarToStudioPage"
import CalendarProvider from "@/providers/CalendarProvider"
import StudioProvider from "@/providers/StudioProvider"

const CalendarToStudio = () => (
  <StudioProvider>
    <CalendarProvider>
      <CalendarToStudioPage />
    </CalendarProvider>
  </StudioProvider>
)

export default CalendarToStudio
