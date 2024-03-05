import useIsMobile from "@/hooks/useIsMobile"
import { useBookProject } from "@/providers/BookProjectProvider"
import Input from "@/shared/Input"
import Media from "@/shared/Media"
import EndIcon from "../EndIcon"
import StartIcon from "../StartIcon"

const AddLinks = () => {
  const { links, setLinks } = useBookProject()
  const isMobile = useIsMobile()

  const onChange = (val, i) => {
    const temp = [...links]

    temp[i] = val

    setLinks(temp)
  }

  return (
    <div
      className="mt-[20px] rounded-[24px] bg-gray_overlay_3 p-[20px]
      md:mt-[24px] md:rounded-[14.4px] md:p-[12px] lg:mt-[32px] lg:rounded-[19.2px]
      lg:p-[16px] xl:mt-[40px] xl:rounded-[24px] xl:p-[20px]"
    >
      <p
        className="font-urwgeometric_bold text-[20px] text-gray_1 md:text-[14.4px]
        lg:text-[19.2px] xl:text-[24px]"
      >
        Add Links
      </p>
      <p
        className="font-urwgeometric text-[10px] text-gray_2 samsungS8:text-[12px] md:text-[8.4px]
        lg:text-[11.2px] xl:text-[14px]"
      >
        {isMobile ? (
          <>
            Add any relevant links here (eg. Spotify Page, Instagram,
            <br />
            Soundcloud, Website etc) this helps the studio get to know
            <br />
            who you are. This will improve your chances.
          </>
        ) : (
          <>
            Add any relevant links here (eg. Spotify Page, Instagram, Soundcloud,
            <br />
            Website etc) this helps the studio get to know who you are. This will
            <br />
            improve your chances.
          </>
        )}
      </p>
      <div
        className="flex flex-col gap-y-[10px] py-[10px]
        md:gap-y-[12px] md:py-[12px] lg:gap-y-[16px] lg:py-[16px] xl:gap-y-[20px] xl:py-[20px]"
      >
        {links.map((link, i) => (
          <Input
            // eslint-disable-next-line react/no-array-index-key
            key={`link_${i}`}
            id={`link_${i}`}
            name={`link_${i}`}
            value={link}
            type="text"
            onChange={(e) => onChange(e.target.value, i)}
            containerClassName="w-full h-[48px]
            border-l-[1px] border-l-gray_overlay_6
            border-r-[1px] border-r-gray_overlay_6
            border-b-[2px] border-b-gray_overlay_6
            shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]
            backdrop-blur-[12px] bg-gray_overlay_6"
            className="px-[40px] pt-[10px] font-urwgeometric_regular
            !text-[16px] text-gray_2 
            outline-none placeholder:text-[14px]
            placeholder:text-gray_2 focus:!border-[1px] focus:ring-0"
            placeholder="e.g.: spotify.com/user/yourname"
            classNameError={`text-s_error font-urwgeometric_medium
                        text-[12px]`}
            startIcon={<StartIcon label={i + 1} />}
            endIcon={i > 0 && <EndIcon num={i} />}
            hookToForm
          />
        ))}
        <button
          onClick={() => {
            setLinks([...links, ""])
          }}
          type="button"
          className="flex aspect-[1/1] w-[44px]
          items-center justify-center self-center rounded-full
          border-x-[1px] border-b-[2px] border-gray_overlay_6
          bg-[#121211cc] shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]"
        >
          <Media
            type="image"
            link="/images/BookProject/plus.svg"
            blurLink="/images/BookProject/plus.png"
            containerClasses="w-[24px] aspect-[1/1]"
          />
        </button>
      </div>
    </div>
  )
}

export default AddLinks
