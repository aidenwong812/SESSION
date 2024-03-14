import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import Button from "@/shared/Button"
import useIsMobile from "@/hooks/useIsMobile"
import BookSessionButton from "../BookSessionButton"

const CTAButtons = () => {
  const [ref, inView] = useInView()

  const isMobile = useIsMobile()
  const [isVisibleSticky, setIsVisibleSticky] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisibleSticky(false)
      return
    }

    setIsVisibleSticky(true)
  }, [inView])

  return (
    <>
      <div ref={ref}>
        <BookSessionButton />
      </div>
      <Button
        id="book-session"
        type="button"
        className="h-[48px] w-full border-x-[1px] border-b-[2px] border-x-gray_overlay_6 border-b-gray_overlay_6 bg-gray_overlay_6 !bg-none
                                            font-urwgeometric_bold text-s_error
                                            shadow-none md:h-[28.8px] md:w-[144px]
                                            md:text-[9.6px] lg:h-[38.4px] lg:w-[192px]
                                            lg:text-[12.8px] xl:h-[48px]
                                            xl:w-[240px] xl:text-[16px]"
        pulseColor="white"
        bgVariant="primary"
      >
        Cancel Session
      </Button>
      {isVisibleSticky && isMobile && (
        <div
          className="fixed bottom-0 left-0 z-[100] w-screen bg-black_0 px-[30px]
                py-[20px] shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]"
        >
          <BookSessionButton />
        </div>
      )}
    </>
  )
}

export default CTAButtons
