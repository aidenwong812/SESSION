import ComingPeople from "./ComingPeople"
import EngineerNeed from "./EngineerNeeded"
import Instruments from "./Instruments"
import SessionDetail from "./SessionDetail"
import StudioDetail from "./StudioDetail"
import UserInfo from "./UserInfo"

export default function DetailBody({ request }) {
  return (
    <div className="grid w-full grid-cols-2 gap-x-[30px] rounded-[48px] bg-black_0 px-[40px] pb-[24px] pt-[60px]">
      <div>
        <StudioDetail request={request} />
        <SessionDetail request={request} />
      </div>
      <div>
        <UserInfo request={request} />
        <Instruments request={request} />
        <ComingPeople request={request} />
        <EngineerNeed request={request} />
      </div>
    </div>
  )
}
