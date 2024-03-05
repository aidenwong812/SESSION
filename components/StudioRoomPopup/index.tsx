import Accordion from "@/shared/Accordion"
import StudioRoomCard from "../StudioRoomCard"

export default function StudioRoomPopup({ room, close }) {
  return (
    <div className="absolute left-0 top-0 size-full">
      <div className="sticky top-0 z-50 h-screen w-full overflow-y-scroll px-20 py-24 backdrop-blur-lg">
        <div className="w-full space-y-5 rounded-3xl bg-black_0 px-10 pt-10">
          <StudioRoomCard room={room} className="h-40" close={close} />

          <div className="space-y-5 p-5">
            <h3 className="font-urwgeometric_light text-2xl text-gray_1">Room Equipment</h3>
            {room.equipment.map((equipment) => (
              <Accordion
                key={equipment.category}
                tabClassName="font-urwgeometric_light text-2xl text-gray_1"
                title={equipment.category}
                content={
                  <ul className="grid list-disc grid-cols-2 gap-5 px-5 pt-3">
                    {equipment.items.map((item) => (
                      <li
                        key={`${equipment.category}-${item}`}
                        className="font-urwgeometric_light text-sm text-gray_2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
