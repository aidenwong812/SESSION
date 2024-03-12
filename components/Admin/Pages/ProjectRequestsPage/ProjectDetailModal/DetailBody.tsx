import ProjectDetail from "./ProjectDetail"
import Instruments from "./Instruments"
import UserInfo from "./UserInfo"
import TrackList from "./TrackList"
import Links from "./Links"
import Genre from "./Genre"
import ProjectDescription from "./ProjectDescription"

export default function DetailBody() {
  return (
    <div className="relative grid w-full grid-cols-2 gap-x-[40px] rounded-[48px] bg-black_0 px-[40px] pb-[24px] pt-[60px]">
      <span className="absolute left-0 top-0 size-[840px] rounded-br-[100%] rounded-tl-[48px] bg-gradient-to-br from-[#FF6A2B05] to-[#FF442B05]" />
      <span className="absolute left-0 top-0 size-[576px] rounded-br-[100%] rounded-tl-[48px] bg-gradient-to-br from-[#FF6A2B05] to-[#FF442B05]" />
      <span className="absolute left-0 top-0 size-[360px] rounded-br-[100%] rounded-tl-[48px] bg-gradient-to-br from-[#FF6A2B05] to-[#FF442B05]" />
      <span className="absolute left-0 top-0 size-[132px] rounded-br-[100%] rounded-tl-[48px] bg-gradient-to-br from-[#FF6A2B05] to-[#FF442B05]" />
      <div>
        <ProjectDetail />
        <Genre />
        <ProjectDescription />
        <Instruments />
      </div>
      <div>
        <UserInfo />
        <TrackList />
        <Links />
      </div>
    </div>
  )
}
