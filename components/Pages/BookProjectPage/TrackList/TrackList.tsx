import { useBookProject } from "@/providers/BookProjectProvider"
import Button from "@/shared/Button"
import Media from "@/shared/Media"
import useIsMobile from "@/hooks/useIsMobile"
import FadeIn from "../../../FadeIn"
import TrackCard from "../TrackCard"
import BackwardButton from "../../../BackwardButton"

const TrackList = () => {
  const { trackList, setTrackList, setCurStep, STEPS } = useBookProject()
  const isMobile = useIsMobile()

  return (
    <FadeIn className="w-full">
      {isMobile && (
        <BackwardButton onClick={() => setCurStep(STEPS.ADD_DETAIL)} label="Back to details" />
      )}

      <p className="pt-[20px] font-urwgeometric_medium text-[30px] text-gray_1 md:text-[19.2px] lg:text-[25.6px] xl:text-[32px]">
        Tracklist
      </p>
      <p className="font-urwgeometric text-[12px] text-gray_2 md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]">
        List down all of the tracks of your project & choose the specific needs you have for each
        track.
      </p>
      <div
        className="grid grid-cols-1 gap-y-[20px] pt-[20px] md:grid-cols-2 md:gap-x-[24px] md:gap-y-[36px]
        md:pt-[24px] lg:gap-x-[32px] lg:gap-y-[48px]
        lg:pt-[32px] xl:gap-x-[40px] xl:gap-y-[60px] xl:pt-[40px]"
      >
        {trackList.map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <TrackCard key={i} trackNumber={i + 1} hasRemoveButton={trackList?.length > 1} />
        ))}
        <div
          className="flex h-[118px] w-full items-center justify-center rounded-[24px]
          bg-gray_overlay_3 md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]"
        >
          <button
            className="flex aspect-[1/1]
            w-[44px] items-center justify-center rounded-full border-x-[1px] border-b-[2px]
            border-x-gray_overlay_6 border-b-gray_overlay_6 bg-[#121211cc]
            shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33] md:w-[26.4px] lg:w-[35.2px] xl:w-[44px]"
            type="button"
            onClick={() => setTrackList([...trackList, {}])}
          >
            <Media
              type="image"
              link="/images/BookProject/plus.svg"
              blurLink="/images/BookProject/plus.png"
              containerClasses="w-[24px] md:w-[14.4px] lg:w-[19.2px] xl:w-[24px] aspect-[1/1]"
            />
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Button
          id="add-tracklist"
          type="button"
          className="mt-[20px] h-[36px] w-[180px] border-x-[1px] border-b-[2px] border-x-[#A1EA04] border-b-[#A1EA04] font-urwgeometric_bold
          text-black shadow-[0px_0px_40px_0px_#a1ea0466]
          md:mt-[36px] md:h-[28.8px]
          md:w-[201px] md:text-[9.6px]
          lg:mt-[48px] lg:h-[38.4px]
          lg:w-[268px]
          lg:text-[12.8px] xl:mt-[60px] xl:h-[48px]
          xl:w-[335px] xl:text-[16px]"
          pulseColor="white"
          onClick={() => setCurStep(STEPS.PROJECT_SUMMARY)}
          disabled={trackList.filter((track) => !track.name).length}
        >
          Continue
        </Button>
      </div>
    </FadeIn>
  )
}

export default TrackList
