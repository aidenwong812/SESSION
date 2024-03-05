/* eslint-disable jsx-a11y/click-events-have-key-events,  jsx-a11y/no-static-element-interactions */
import { useAuth } from "@/providers/AuthProvider"
import Checkbox from "@/shared/Checkbox"

const Policies = () => {
  const { isPolicyApproved, setIsPolicyApproved } = useAuth()

  return (
    <div className="mb-[20px] flex flex-col gap-y-[10px] md:mb-0 md:gap-y-[30px]">
      <button
        className={`rounded-[24px]
        border-x-[1px] border-b-[2px]
        border-x-gray_overlay_6 border-b-gray_overlay_6
        bg-gray_overlay_6
            ${isPolicyApproved ? "!border-[2px] !border-[#A1EA04]" : ""}`}
        type="button"
      >
        <div
          className="flex items-center gap-x-[15px]
          rounded-[24px] border-gray_overlay_6 px-[15px] py-[10px]
          shadow-[0px_1.5px_0px_2.5px_#d2d2d208] md:py-[20px]"
          onClick={() => setIsPolicyApproved(!isPolicyApproved)}
        >
          <Checkbox checked={isPolicyApproved} id="agree_policy" readOnly />
          <p className="text-left font-urwgeometric text-[11px] text-gray_1 samsungS8:text-[12px] xs:text-[14px]">
            I agree to the{" "}
            <a className="text-[#A1EA04] underline" href="/terms" target="_blank">
              Terms of Service
            </a>{" "}
            of Session.
            <br />
            <br />
            You want to know about how Session uses and protects personal data,
            <br />
            read our{" "}
            <a className="text-[#A1EA04] underline" href="/policy" target="_blank">
              Data Policy.
            </a>
          </p>
        </div>
      </button>
    </div>
  )
}

export default Policies
