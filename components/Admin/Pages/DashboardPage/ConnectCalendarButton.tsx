import grantToCalendar from "@/lib/calendarUtils"
import Button from "./Button"

interface ConnectCalendarButtonProps {
  studioData: any
  onSuccess?: () => void
}

const ConnectCalendarButton = ({ studioData, onSuccess }: ConnectCalendarButtonProps) => {
  const handleClick = async () => {
    await grantToCalendar(studioData.id, studioData.name)
    onSuccess?.()
  }

  return (
    <Button className="mt-4" onClick={handleClick}>
      <p className="font-urwgeometric_bold text-[16px] text-black_0">Connect Calendar</p>
    </Button>
  )
}

export default ConnectCalendarButton
