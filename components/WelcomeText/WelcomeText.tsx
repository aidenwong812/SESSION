import useIsMobile from "@/hooks/useIsMobile"
import ClipSpan from "../ClipSpan"

const WelcomeText = () => {
  const isMobile = useIsMobile()

  return (
    <div>
      <p
        className="font-urwgeometric_medium text-[36.1px] leading-[80%] text-gray_1 samsungS8:text-[40.6px]
              xs:text-[44px] md:text-[64px]"
      >
        Your next <ClipSpan>Session</ClipSpan>
        <br />
        awaits you.
      </p>
      <p
        className="pt-[4vh] font-urwgeometric_medium text-[13.12px] text-gray_1
              samsungS8:text-[14.7px]
              xs:text-[16px]"
      >
        {isMobile ? (
          <>
            <ClipSpan>Sound Studios</ClipSpan> is excited to welcome you to
            <br />
            their world class studio. Quickly sign up or log in
            <br />
            to book your session.
          </>
        ) : (
          <>
            <ClipSpan>Sound Studios</ClipSpan> is excited to welcome you to their world class
            studio.
            <br />
            Quickly sign up or log in to book your session.
          </>
        )}
      </p>
    </div>
  )
}

export default WelcomeText
