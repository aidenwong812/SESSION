import { useBookSession } from "@/providers/BookSessionProvider"
import Button from "@/shared/Button"

const BookSessionButton = () => {
  const { loading } = useBookSession()

  return (
    <Button
      id="select-session"
      type="submit"
      className="mt-[20px] h-[48px] w-full border-x-[1px] border-b-[2px]
          border-x-[#A1EA04] border-b-[#A1EA04]
          font-urwgeometric_bold text-black
          shadow-none md:mt-[12px]
          md:h-[28.8px] md:text-[12px]
          md:shadow-[0px_0px_40px_0px_#a1ea0466] lg:mt-[16px]
          lg:h-[38.4px] lg:text-[16px] xl:mt-[20px]
          xl:h-[48px] xl:text-[20px]"
      pulseColor="white"
      disabled={loading}
    >
      Request Session
    </Button>
  )
}

export default BookSessionButton
