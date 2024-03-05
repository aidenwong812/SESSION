export default function Instruments({ request }) {
  return (
    <div className="mt-[30px]">
      <p className="pb-[15px] pl-[20px] font-urwgeometric text-[14px] leading-[14px] text-gray_1">
        Instruments you will be recording
      </p>
      <div className="flex items-center gap-x-[10px]">
        {request.instruments?.length > 0 &&
          request.instruments.map((instrument) => (
            <div
              key={instrument.value}
              className="rounded-full bg-gradient_s_1 px-[16px] py-[4px] font-urwgeometric_semibold"
            >
              {instrument.label}
            </div>
          ))}
      </div>
    </div>
  )
}
