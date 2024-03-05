export default function SessionDetail({ request }) {
  return (
    <div className="mt-[50px]">
      <p className="pb-[10px] pl-[20px] font-urwgeometric text-[14px] leading-[14px] text-gray_1">
        Session Details
      </p>
      <div
        className="w-full !rounded-[24px] !border-x-[1px] !border-b-[2px]
            !border-gray_overlay_6 bg-gray_overlay_6
            !p-[20px]"
      >
        <textarea
          className="!min-h-[280px] w-full
                    !border-none  !bg-transparent
                    font-urwgeometric text-gray_1 focus:!outline-none
                    focus:!ring-0"
          value={request.sessionDetail}
        />
      </div>
    </div>
  )
}
