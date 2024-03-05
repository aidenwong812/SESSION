import Media from "@/shared/Media"

export default function UserInfo({ request }) {
  return (
    <div className="relative z-[2] flex items-center gap-x-[10px]">
      <Media
        type="image"
        containerClasses="w-[40px] h-[40px] rounded-full !overflow-hidden"
        link="/images/Admin/session-requests-avatar.svg"
        blurLink="/blurLink/Admin/session-requests-avatar.png"
      />
      <div className="flex flex-col gap-x-[5px]">
        <p className="text-left font-urwgeometric text-[14px] leading-[14px] text-gray_2">
          Artist/Band
        </p>
        <p className="font-urwgeometric text-[32px] leading-[32px] text-gray_1">
          {request.bandName}
        </p>
      </div>
    </div>
  )
}
