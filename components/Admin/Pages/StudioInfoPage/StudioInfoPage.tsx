import Image from "next/image"
import { useMemo, useState } from "react"
import Layout from "@/components/Layout"
import ClipSpan from "@/components/ClipSpan"
import Icon from "@/components/ui/Icon"
import Badge from "@/components/ui/Badge"
import Card from "@/components/ui/Card"
import StudioRoomCard from "@/components/StudioRoomCard"
import StudioRoomPopup from "@/components/StudioRoomPopup"
import { useStudioInfo } from "@/providers/StudioInfoProvider"

export default function StudioInfoPage() {
  const [roomDetailsId, setRoomDetailsId] = useState(null)
  const { studio, roomList } = useStudioInfo()
  const roomDetails = useMemo(
    () => roomDetailsId && roomList.find((room) => room.id === roomDetailsId),
    [roomDetailsId, roomList],
  )

  return (
    <Layout type="admin">
      <div className="relative">
        <div className="p-5 xl:p-14">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <div className="mr-3 w-7">
                    <Image
                      src="/images/Admin/my-studio-active.svg"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  <h1 className="font-urwgeometric_semibold text-6xl">
                    <ClipSpan className="drop-shadow-xl drop-shadow-session">
                      {studio?.name}
                    </ClipSpan>
                  </h1>
                </div>
                <div className="mt-4 flex items-center">
                  <Icon name="MapPin" className="mr-1" size={16} weight="fill" />
                  <p className="font-urwgeometric_light text-sm text-gray_1">{studio?.location}</p>
                </div>
                <div className="mt-8 space-x-2">
                  {studio?.services.map((service) => (
                    <Badge
                      key={service}
                      className="text-session drop-shadow-xl drop-shadow-session"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="w-1/2 pl-10">
                <div className="relative aspect-video overflow-hidden rounded-3xl">
                  <Image
                    src={studio?.photo || "/images/StudioInfo/Studio Image.jpg"}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-10">
              <div className="flex flex-col gap-10">
                <Card heading="Opening Hours">
                  <ul className="space-y-2">
                    {studio &&
                      studio.openingHours.map((item) => (
                        <li key={item.day} className="flex justify-between gap-12">
                          <span className="font-urwgeometric_light text-xs text-gray_2">
                            {item.day}
                          </span>
                          <span className="whitespace-nowrap font-urwgeometric_light text-xs text-gray_1">
                            {item.hours}
                          </span>
                        </li>
                      ))}
                  </ul>
                </Card>
              </div>

              <Card
                className="grow"
                heading={
                  <>
                    Rooms <span className="text-sm text-session">{roomList.length}</span>
                  </>
                }
              >
                <div className="grid grid-cols-[repeat(auto-fill,minmax(370px,1fr))] gap-5">
                  {roomList.map((room) => (
                    <StudioRoomCard
                      key={room.id}
                      className="aspect-video border border-transparent transition-all hover:border-session"
                      room={room}
                      showDetails={() => setRoomDetailsId(room.id)}
                    />
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
        {roomDetails && <StudioRoomPopup room={roomDetails} close={() => setRoomDetailsId(null)} />}
      </div>
    </Layout>
  )
}
