import Image from "next/image"
import { useId } from "react"
import { twMerge } from "tailwind-merge"
import Icon from "@/components/ui/Icon"
import Button from "@/shared/Button"
import Badge from "../ui/Badge"

type StudioRoomCardProps = {
  room: any
  className?: string
  showDetails?: () => void
  close?: () => void
}

export default function StudioRoomCard({
  room,
  className,
  showDetails,
  close,
}: StudioRoomCardProps) {
  const buttonId = useId()

  return (
    <div
      className={twMerge(
        "relative rounded-3xl overflow-hidden shadow-md px-4 py-3 flex flex-col z-0",
        className,
      )}
    >
      <div className="absolute left-0 top-0 -z-20 size-full">
        <Image src={room.photo} alt="" layout="fill" objectFit="cover" />
      </div>

      <div className="absolute bottom-0 left-0 -z-10 h-2/5  w-full bg-gradient-to-t from-black_3 to-transparent" />
      <div className="flex items-center justify-between">
        <Badge className="flex aspect-square items-center gap-1 bg-black_8 p-3 pl-2">
          <Icon name="Users" size={16} weight="duotone" active />
          <div className="pt-0.5 font-urwgeometric_light text-xs leading-none text-session">
            {room.capacity}
          </div>
        </Badge>

        {close && (
          <button type="button" className="rounded-full bg-black_8 p-2.5" onClick={close}>
            <Icon name="X" size={16} />
          </button>
        )}
      </div>

      <Badge className="mt-auto flex w-full items-center bg-black_8">
        <span className="mr-auto font-urwgeometric_semibold text-lg text-gray_1">{room.name}</span>
        <Icon name="Clock" size={16} active weight="light" className="mr-1" />
        <span className="font-urwgeometric_light text-sm text-gray_1">{room.minimumHours}</span>

        {showDetails && (
          <Button id={buttonId} className="ml-3 px-6 py-2 text-black" onClick={showDetails}>
            Details
          </Button>
        )}
      </Badge>
    </div>
  )
}
