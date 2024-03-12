import ClipSpan from "@/components/ClipSpan"
import Icon from "@/components/ui/Icon"

export default function ConfirmPricingButton({ pricing, description, onClick }) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between rounded-3xl border-x border-b-2 border-gray_overlay_6 bg-gray_overlay_3 p-5 text-left"
      onClick={onClick}
    >
      <div>
        <p className="font-urwgeometric text-2xl text-gray_1">
          {pricing} <ClipSpan>Session</ClipSpan>
        </p>
        <p className="pt-2.5 font-urwgeometric text-gray_2">{description}</p>
      </div>
      <span className="flex size-11 items-center justify-center rounded-full border-x border-b-2 border-gray_overlay_6 bg-black_8">
        <Icon name="CaretRight" aria-label="Confirm Pricing" />
      </span>
    </button>
  )
}
