import { useRouter } from "next/router"
import Button from "@/shared/Button"
import Media from "@/shared/Media"
import useIsMobile from "@/hooks/useIsMobile"
import { useCheckOutProject } from "@/providers/CheckOutProjectProvider"

const BookedProject = () => {
  const router = useRouter()
  const isMobile = useIsMobile()
  const { projectData } = useCheckOutProject()

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="flex flex-col">
          <p
            className="pb-[10px]
                font-urwgeometric_medium text-[32px] leading-[90%] text-gray_1 md:pb-[15px]
                md:text-[64px]"
          >
            {isMobile ? (
              <>
                Your <span className="text-project">Project</span> has <br />
                been confirmed.
              </>
            ) : (
              <>
                Your <span className="text-project">Project</span> has been confirmed.
              </>
            )}
          </p>
          <p
            className="font-urwgeometric_medium text-[16px]
                        text-gray_1
                        md:pt-[1.5vh]"
          >
            Congratulations! Monitor your Project status through our website. The studio will <br />
            reach out to you with next steps!
          </p>
        </div>
        <div
          className="relative mt-[130px] w-[80%] self-center rounded-[24px]
      bg-[#121211cc] px-[20px] py-[10px] md:mt-[40px] md:translate-x-[50px] md:self-start md:rounded-[14.4px] md:py-[20px]
      md:pl-[48px] md:pr-[24px] lg:rounded-[19.2px] xl:rounded-[24px]"
        >
          <Media
            type="image"
            link="/images/BookProject/confirm.svg"
            blurLink="/images/BookProject/confirm.png"
            containerClasses="w-[200px] aspect-[1/1] !absolute left-[calc(50%-110px)] md:left-[-110px] top-[-140px] md:top-[-70px]"
          />
          <div className="text-project">{projectData.projectName}</div>
          <p className="pt-[4px] font-urwgeometric text-[10px] text-gray_2">
            Consisting of {projectData.trackList.length} tracks:
          </p>

          <ul className="pl-[20px] pt-[12px]">
            {projectData.trackList.map((track, i) => (
              <li
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                className="list-disc font-urwgeometric text-[12px] text-gray_1 md:text-[14px]"
              >
                {track.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button
        id="back-book-type"
        type="button"
        className="mt-[20px] h-[40px] w-full border-x-[1px] border-b-[2px]
                    border-x-[#A1EA04] border-b-[#A1EA04]
                    font-urwgeometric_bold text-black
                    shadow-[0px_0px_40px_0px_#a1ea0466] md:mt-[14.4px]
                    md:h-[28.8px] md:text-[9.6px]
                    lg:mt-[19.2px]
                    lg:h-[38.4px] lg:text-[12.8px] xl:mt-[24px]
                    xl:h-[48px] xl:text-[16px]"
        pulseColor="white"
        onClick={() => router.push("/Studio B/booktype")}
      >
        Back to the Studio
      </Button>
    </div>
  )
}

export default BookedProject
