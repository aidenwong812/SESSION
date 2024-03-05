import Icon from "@/components/ui/Icon"

export default function PriceInput({ label, value, onChange }) {
  return (
    <div className="w-full rounded-3xl bg-gray_overlay_3 p-5">
      <p className="mb-5 font-urwgeometric text-2xl leading-none text-gray_1">{label}</p>
      <div className="flex w-full items-center rounded-full border-x border-b-2 border-t-0 border-gray_overlay_6 bg-gray_overlay_6 px-3 py-1  drop-shadow-xl backdrop-blur-md drop-shadow-session">
        <Icon name="CurrencyDollar" className="text-session" size={32} />

        <input
          id="session-price"
          value={value || ""}
          onChange={(e) => onChange(Number(e.target.value))}
          className="grow border-0 bg-transparent p-0 text-3xl text-session focus:ring-0"
        />
      </div>
    </div>
  )
}
