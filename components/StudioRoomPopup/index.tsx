import StudioRoomCard from "../StudioRoomCard"
import EquipmentDetail from "../EquipmentDetail"

export default function StudioRoomPopup({ room, close }) {
  return (
    <div className="absolute left-0 top-0 size-full">
      <div className="sticky top-0 z-50 h-screen w-full overflow-y-scroll px-20 py-24 backdrop-blur-lg">
        <div className="w-full space-y-5 rounded-3xl bg-black_0 px-10 pt-10">
          <StudioRoomCard room={room} className="h-40" close={close} />

          <EquipmentDetail data={room} />
        </div>
      </div>
    </div>
  )
}
