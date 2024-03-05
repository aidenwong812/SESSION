import useIsMobile from "@/hooks/useIsMobile"
import { useBookProject } from "@/providers/BookProjectProvider"
import Button from "@/shared/Button"
import Media from "@/shared/Media"
import ClipSpan from "../../../ClipSpan"
import TrackCard from "../TrackCard"

const DeleteTrack = ({ toggleModal }) => {
  const isMobile = useIsMobile()

  const { selectedTrackNo, setIsOpenDelTrackModal, isOpenDelTrackModal, trackList, setTrackList } =
    useBookProject()

  const onDelTrack = () => {
    const temp = [
      ...trackList.slice(0, selectedTrackNo - 1),
      ...trackList.slice(selectedTrackNo, trackList.length),
    ]
    setTrackList(temp)
  }

  return (
    <div className="flex grow flex-col">
      <div className="flex w-full flex-row items-center justify-between pb-[20px] md:flex-col md:items-center md:pb-[40px]">
        {isMobile && (
          <p className="font-urwgeometric text-[32px] leading-[110%] text-gray_1 md:text-[28.8px] lg:text-[38.4px] xl:text-[48px]">
            Are you sure you <br /> want to delete <br />
            <ClipSpan>Track {selectedTrackNo}</ClipSpan>?
          </p>
        )}
        <button
          type="button"
          className="flex !aspect-[1/1]
          w-[44px] items-center justify-center
          rounded-full border-x-[1px] border-b-[2px]
          border-x-gray_overlay_6 border-b-gray_overlay_6 bg-gray_overlay_6 shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33] md:self-end"
          onClick={toggleModal}
        >
          <Media
            type="image"
            link="/images/Common/close.svg"
            blurLink="/images/Common/close.png"
            containerClasses="w-[24px] md:w-[14.4px] lg:w-[19.2px] xl:w-[24px] aspect-[1/1]"
          />
        </button>
        {!isMobile && (
          <p className="font-urwgeometric text-[32px] leading-[110%] text-gray_1 md:text-[28.8px] lg:text-[38.4px] xl:text-[48px]">
            Are you sure you want to delete
            <ClipSpan>Track {selectedTrackNo}</ClipSpan>?
          </p>
        )}
      </div>
      <TrackCard trackNumber={selectedTrackNo} editable={false} />
      <div
        className="m:gap-y-[19.6px] flex grow flex-col
            justify-end gap-y-[10px] md:gap-y-[25.6px] xl:gap-y-[32px]"
      >
        {isOpenDelTrackModal && (
          <>
            <Button
              id="cancel-btn"
              type="button"
              className="h-[48px] w-full border-[1px] border-[#A1EA04] !bg-transparent
                            bg-none
                            font-urwgeometric_bold !text-[#A1EA04] !shadow-none
                            md:h-[28.8px] md:text-[9.6px] lg:h-[38.4px]
                            lg:text-[12.8px] xl:h-[48px] xl:text-[16px]"
              pulseColor="#A1EA04"
              onClick={() => setIsOpenDelTrackModal(!isOpenDelTrackModal)}
              bgVariant="primary"
            >
              Cancel
            </Button>
            <Button
              id="delete-btn"
              type="button"
              className="h-[48px] w-full border-x-[1px] border-b-[2px] border-x-[#A1EA04]
                            border-b-[#A1EA04] font-urwgeometric_bold
                            text-black shadow-[0px_0px_40px_0px_#a1ea0466]
                            md:h-[28.8px] md:text-[9.6px]
                            lg:h-[38.4px] lg:text-[12.8px]
                            xl:h-[48px]
                            xl:text-[16px]"
              pulseColor="white"
              onClick={() => {
                setIsOpenDelTrackModal(!isOpenDelTrackModal)
                onDelTrack()
              }}
            >
              Delete Track
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default DeleteTrack
