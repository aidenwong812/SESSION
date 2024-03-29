import { useBookSession } from "@/providers/BookSessionProvider"
import SelectBox from "@/components/SelectBox"
import TextInput from "@/components/TextInput"

const InputBandInstrument = () => {
  const { bandName, setBandName, instruments, onChangeInstrument, selectedRoom } = useBookSession()

  return (
    <div className="flex flex-col gap-y-[20px] md:pb-[24px] lg:pb-[32px] xl:pb-[40px]">
      <TextInput
        type="text"
        id="bandName"
        name="bandName"
        value={bandName}
        onChange={setBandName}
        placeholder="Enter your Artist/Band Name"
        label="Artist/Band Name"
      />
      <SelectBox
        id="instrument"
        name="instrument"
        value={instruments}
        onChange={onChangeInstrument}
        placeholder="Choose instruments"
        label="Instruments you will be recording"
        options={selectedRoom?.instruments}
        multiple
        dropDownLabel="Choose up to 7."
        hookToForm={false}
      />
    </div>
  )
}

export default InputBandInstrument
