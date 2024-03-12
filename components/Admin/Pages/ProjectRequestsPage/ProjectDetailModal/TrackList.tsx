import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Media from "@/shared/Media"
import { useProjectRequest } from "@/providers/ProjectRequestProvider"
import ClipSpan from "@/components/ClipSpan"

const TrackList = () => {
  const [isOpenStudioMenu, setIsOpenStudioMenu] = useState(true)
  const { selectedRequest } = useProjectRequest()

  return (
    <div className="mt-[40px] !rounded-[24px] bg-gray_overlay_3 !p-[20px]">
      <button
        type="button"
        className="flex w-full items-center justify-between"
        onClick={() => setIsOpenStudioMenu(!isOpenStudioMenu)}
      >
        <div className="flex items-center gap-x-[8px] text-[24px] text-gray_1">Tracklist</div>
        <Media
          type="image"
          link={isOpenStudioMenu ? "/images/Admin/arrow-down.svg" : "/images/Admin/arrow-up.svg"}
          blurLink={
            isOpenStudioMenu ? "/images/Admin/arrow-down.png" : "/images/Admin/arrow-up.png"
          }
          containerClasses="w-[24px] h-[24px]"
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpenStudioMenu && (
          <motion.div
            className="flex w-full flex-col overflow-hidden"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto" },
              collapsed: { height: 0 },
            }}
            transition={{
              duration: 0.1,
            }}
          >
            {selectedRequest.trackList.map((track, index) => (
              <div key={track.id} className="flex flex-col gap-[4px]">
                <div
                  className="mt-[20px] flex w-full items-center
                !rounded-[24px] !border-x-[1px]
                !border-b-[2px] !border-gray_overlay_6 bg-gray_overlay_6 !px-[20px] !py-[15px]"
                >
                  <ClipSpan className="py-0 font-urwgeometric text-[18px] font-bold leading-[18px]">
                    {index + 1}
                  </ClipSpan>
                  <p className="pl-[14px] font-urwgeometric text-[14px] leading-[14px] text-gray_1">
                    {track.name}
                  </p>
                </div>
                <div className="flex items-end gap-[2px] px-[20px]">
                  <div
                    className="mr-[10px] flex size-[16px] items-center justify-center
                  rounded-full border-x-[1px] border-gray_overlay_6 bg-gradient_s_1"
                  >
                    <Media
                      type="image"
                      link="/images/Admin/session-detail-check.svg"
                      blurLink="/images/Admin/session-detail-check.png"
                      containerClasses="w-[12px] h-[12px]"
                    />
                  </div>
                  {Object.keys(track)
                    .filter((_) => _ !== "name").map(
                      (one, id) =>
                        track[one] === true && (
                          <>
                            {id !== 0 && <span className="p-0 leading-[16px] text-gray_2">•</span>}
                            <ClipSpan key={one} className="py-0 font-urwgeometric text-[16px]">
                              {one}
                            </ClipSpan>
                          </>
                        ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TrackList
