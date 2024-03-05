import Spline from "@splinetool/react-spline"
import Button from "@/shared/Button"
import ProgressBar from "@/shared/ProgressBar"
import { useAuth } from "@/providers/AuthProvider"
import ClipSpan from "@/components/ClipSpan"

const Success = () => {
  const { register, loading } = useAuth()

  return (
    <>
      <div className="pt-[80px] md:pt-[20px]">
        <ProgressBar value={100} />
        <Spline
          scene="https://prod.spline.design/lRsoMH0pKRD6OM2i/scene.splinecode"
          style={{
            width: "250px",
            height: "188.75px",
            marginTop: "20px",
            transform: "translateX(-70px)",
          }}
        />
        <p
          className="translate-y-[-40px] pt-[20px] font-urwgeometric_medium
        text-[35px] leading-[64px] text-gray_1 samsungS8:text-[42px] md:text-[64px]"
        >
          Congratulations!
        </p>
        <p
          className="translate-y-[-40px] pt-[10px] font-urwgeometric
          text-[13px] text-gray_1 samsungS8:text-[15px] xs:text-[17px]
          md:pt-[20px] md:text-[16px]"
        >
          <ClipSpan>{`You're all set.`}</ClipSpan> Simply click the button bellow to begin the
          booking process.
        </p>
      </div>
      <div
        className="flex grow
    flex-col justify-end"
      >
        <Button
          id="redirect-to-book"
          type="submit"
          className="h-[48px] w-full
          border-x-[1px] border-b-[2px]
          border-x-[#A1EA04] border-b-[#A1EA04]
          font-urwgeometric_bold text-black
          shadow-[0px_0px_40px_0px_#a1ea0466]"
          pulseColor="white"
          onClick={register}
          disabled={loading}
        >
          Book
        </Button>
      </div>
    </>
  )
}

export default Success
