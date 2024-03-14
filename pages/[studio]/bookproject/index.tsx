import BookProjectPage from "@/components/Pages/BookProjectPage"
import BookProjectProvider from "@/providers/BookProjectProvider"

const BookProject = () => (
  <BookProjectProvider>
    <BookProjectPage />
  </BookProjectProvider>
)

export default BookProject
