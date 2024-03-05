import { useBookSession } from "@/providers/BookSessionProvider"
import TextInput from "../../../TextInput"

const InputDetail = () => {
  const { sessionDetail, setSessionDetail } = useBookSession()

  return (
    <div
      className="w-full rounded-[24px] bg-gray_overlay_3 p-[20px] md:rounded-[14.4px] md:p-[12px]
    lg:rounded-[16px] lg:p-[16px] xl:rounded-[24px] xl:p-[20px]"
    >
      <p className="font-urwgeometric_bold text-[20px] text-gray_1 md:pb-[6px] md:text-[19.2px] lg:pb-[8px] lg:text-[25.6px] xl:pb-[10px] xl:text-[32px]">
        Session Details
      </p>
      <TextInput
        type="text"
        id="sessionDetail"
        name="sessionDetail"
        value={sessionDetail}
        onChange={setSessionDetail}
        placeholder="Enter session detail..."
        label=""
        variant="multiple"
      />
    </div>
  )
}

export default InputDetail
