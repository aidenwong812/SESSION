import BookSessionPage from "@/components/Pages/BookSessionPage"
import BookSessionProvider from "@/providers/BookSessionProvider"
import CalendarProvider from "@/providers/CalendarProvider"
import DateSelectProvider from "@/providers/DateSelectProvider"
import StudioProvider from "@/providers/StudioProvider"

const BookSession = () => (
  <StudioProvider>
    <BookSessionProvider>
      <CalendarProvider>
        <DateSelectProvider>
          <BookSessionPage />
        </DateSelectProvider>
      </CalendarProvider>
    </BookSessionProvider>
  </StudioProvider>
)

export default BookSession
