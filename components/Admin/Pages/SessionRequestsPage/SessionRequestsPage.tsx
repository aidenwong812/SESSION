import { useMemo, useState } from "react"
import { twJoin } from "tailwind-merge"
import dayjs, { Dayjs } from "dayjs"
import Media from "@/shared/Media"
import ClipSpan from "@/components/ClipSpan"
import ViewSwitch, { ViewType } from "@/components/ui/ViewSwitch"
import Search from "@/components/ui/Search"
import SessionDurationSelect from "@/components/ui/SessionDurationSelect"
import { useSessionRequest } from "@/providers/SessionRequestProvider"
import Layout from "../../../Layout"
import Request from "./Request"
import TimeBar from "../TimeBar"

export default function SessionRequestsPage() {
  const [view, setView] = useState<ViewType>("list")
  const [selectedDuration, setSelectedDuration] = useState<"all" | [Dayjs, Dayjs]>("all")

  const { sessionRequests } = useSessionRequest()

  const filteredSessionRequests = useMemo(() => {
    if (selectedDuration === "all") {
      return sessionRequests.filter((session) => session.booked === false)
    }
    return sessionRequests.filter((request) => {
      const eventStart = dayjs(request.event.start.dateTime)
      return (
        eventStart.isAfter(selectedDuration[0]) &&
        eventStart.isBefore(selectedDuration[1]) &&
        sessionRequests.booked === false
      )
    })
  }, [sessionRequests, selectedDuration])

  return (
    <Layout type="admin">
      <div className="flex h-screen flex-col px-5">
        <TimeBar />
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center">
            <Media
              type="image"
              link="/images/Admin/session-requests-logo.svg"
              blurLink="/images/Admin/session-requests-logo.png"
              containerClasses="w-[47px] h-[70px]"
            />
            <p className="font-urwgeometric text-[48px] leading-[48px] text-gray_1">
              Session Requests
              <ClipSpan className="font-urwgeometric text-[28px] leading-[48px]">
                {" "}
                {filteredSessionRequests.length}
              </ClipSpan>
            </p>
          </div>
          <div className="flex items-center gap-5 rounded-3xl bg-gray_overlay_6 p-5">
            <ViewSwitch view={view} setView={setView} />
            <Search className="w-80" placeholder="Search for Artist/Band..." />
          </div>
        </div>
        <div className="mt-10 flex w-full grow flex-col overflow-y-hidden rounded-t-3xl bg-black_8">
          <SessionDurationSelect selected={selectedDuration} onChange={setSelectedDuration} />
          <div
            className={twJoin(
              "grow overflow-x-hidden overflow-y-scroll p-8 grid gap-5",
              view === "list" && "grid-cols-1",
              view === "grid" && "grid-cols-2",
            )}
          >
            {filteredSessionRequests.map((request) => (
              <Request key={request.id} request={request} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
