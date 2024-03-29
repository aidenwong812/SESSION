import { useMemo } from "react"
import { useBookProject } from "@/providers/BookProjectProvider"
import Media from "@/shared/Media"
import TrackItem from "../TrackItem"

const TrackCard = ({ trackNumber, hasRemoveButton = false, editable = true }) => {
  const { setTrackList, trackList, openDelTrackModal, selectedStudio } = useBookProject()

  const trackData = useMemo(() => trackList[trackNumber - 1] || {}, [trackList, trackNumber])

  const onChange = (name) => {
    const temp = [...trackList]
    temp[trackNumber - 1].name = name
    setTrackList(temp)
  }

  const toggleTrack = (trackKey) => {
    const temp = [...trackList]
    temp[trackNumber - 1][trackKey] = !temp[trackNumber - 1][trackKey]
    setTrackList(temp)
  }

  return (
    <div
      className="relative h-[118px] rounded-[24px]
        bg-gray_overlay_3 md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]"
    >
      <div
        className="h-[48px] rounded-[24px]
            border-x-[1px] border-b-[2px]
            border-x-gray_overlay_6 border-b-gray_overlay_6 bg-gray_overlay_6
            px-[20px] md:rounded-[14.4px] md:px-[12px] lg:rounded-[19.2px]
            lg:px-[16px] xl:rounded-[24px] xl:px-[20px]"
      >
        <div className="flex h-full items-center justify-between">
          <div className="flex grow items-center gap-x-[5px] ">
            <p className="font-urwgeometric_bold text-[#a1ea04] md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]">
              {trackNumber}
            </p>
            <input
              value={trackData?.name || ""}
              placeholder="Enter Track Name..."
              className="grow
                        !border-none
                            bg-transparent font-urwgeometric text-gray_1
                            !outline-none focus:!ring-0"
              onChange={(e) => onChange(e.target.value)}
              autoComplete="off"
              readOnly={!editable}
            />
          </div>
          {hasRemoveButton && (
            <button
              type="button"
              className="flex aspect-[1/1] w-[24px] items-center
                    justify-center overflow-hidden rounded-full bg-gray_overlay_6 shadow-[2px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]
                    md:w-[14.4px] lg:w-[19.6px]
                    xl:w-[24px]"
              onClick={() => openDelTrackModal(trackNumber)}
            >
              <Media
                type="image"
                link="/images/BookProject/remove.svg"
                blurLink="/images/BookProject/remove.png"
                containerClasses="w-[14px] md:w-[8.4px] lg:w-[11.2px] xl:w-[14px] aspect-[1/1]"
              />
            </button>
          )}
        </div>
      </div>
      <div
        className="absolute bottom-[-10px] flex w-full justify-center gap-x-[10px]
            md:bottom-[-12px] md:gap-x-[19.2px] lg:bottom-[-16px] lg:gap-x-[25.6px] xl:bottom-[-20px] xl:gap-x-[32px]"
      >
        {selectedStudio?.services &&
          selectedStudio.services.map((service) => (
            <TrackItem
              key={service}
              label={service}
              selected={trackData[service]}
              toggleItem={() => toggleTrack(service)}
            />
          ))}
      </div>
    </div>
  )
}

export default TrackCard
