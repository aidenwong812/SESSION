import { useState } from "react"
import convertTimeFormat from "@/lib/convertTimeFormat"
import getMonthName from "@/lib/getMonthName"

const LocalDateTime = () => {
  const [date, setDate] = useState(new Date())
  setInterval(() => setDate(new Date()), 10000)

  return (
    <div className="flex items-center gap-x-[10px]">
      <p className="font-urwgeometric_bold text-[12px] text-gray_2">
        {getMonthName(date.getMonth() + 1)}, <span className="text-gray_1">{date.getDate()}</span>
      </p>
      <div className="size-[8px] rounded-full bg-gradient_s_1" />
      <p className="font-urwgeometric_bold  text-[12px] text-gray_1">{convertTimeFormat(date)}</p>
    </div>
  )
}

export default LocalDateTime
