import Accordion from "@/shared/Accordion"
import StudioRoomCard from "../StudioRoomCard"
import infoMapper from "./infoMapper.json"
import DetailContent from "./DetailContent"

export default function StudioRoomPopup({ room, close }) {
  return (
    <div className="absolute left-0 top-0 size-full">
      <div className="sticky top-0 z-50 h-screen w-full overflow-y-scroll px-20 py-24 backdrop-blur-lg">
        <div className="w-full space-y-5 rounded-3xl bg-black_0 px-10 pt-10">
          <StudioRoomCard room={room} className="h-40" close={close} />

          <div className="space-y-5 p-5">
            <h3 className="font-urwgeometric_light text-2xl text-gray_1">Room Equipment</h3>
            {room &&
              infoMapper.map((mapper) => (
                <Accordion
                  key={mapper.key}
                  tabClassName="font-urwgeometric_light text-2xl text-gray_1"
                  title={mapper.label}
                  content={<DetailContent content={room[mapper.key]} />}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
