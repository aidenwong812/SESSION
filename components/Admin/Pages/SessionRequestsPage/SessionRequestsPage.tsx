import { useEffect, useMemo, useState } from "react"
import { twJoin } from "tailwind-merge"
import { toast } from "react-toastify"
import dayjs, { Dayjs } from "dayjs"
import getSessionRequests from "@/lib/firebase/getSessionRequests"
import sendDeclineSession from "@/lib/sendDeclineSession"
import Media from "@/shared/Media"
import ClipSpan from "@/components/ClipSpan"
import ViewSwitch, { ViewType } from "@/components/ui/ViewSwitch"
import Search from "@/components/ui/Search"
import DurationSelect from "@/components/ui/DurationSelect"
import Notification from "../Notification"
import Layout from "../../../Layout"
import Request from "./Request"

export default function SessionRequestsPage() {
  const [sessionRequests, setSessionRequests] = useState([])
  const [view, setView] = useState<ViewType>("list")
  const [selectedDuration, setSelectedDuration] = useState<"all" | [Dayjs, Dayjs]>("all")

  const filteredSessionRequests = useMemo(() => {
    if (selectedDuration === "all") {
      return sessionRequests
    }
    return sessionRequests.filter((request) => {
      const eventStart = dayjs(request.event.start.dateTime)
      return eventStart.isAfter(selectedDuration[0]) && eventStart.isBefore(selectedDuration[1])
    })
  }, [sessionRequests, selectedDuration])

  const fetchSessionRequests = async () => {
    const newSessionRequests = await getSessionRequests()
    if ("error" in newSessionRequests) {
      return
    }
    setSessionRequests(newSessionRequests)
  }

  useEffect(() => {
    fetchSessionRequests()
  }, [])

  const handleDecline = async (requestId) => {
    const response: any = await sendDeclineSession(requestId)
    if (response.status === 200) {
      toast.success("Decline Request")
      fetchSessionRequests()
    }
  }

  return (
    <Layout type="admin">
      <div className="flex h-screen flex-col px-5">
        <Notification />
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
          <DurationSelect selected={selectedDuration} onChange={setSelectedDuration} />
          <div
            className={twJoin(
              "grow overflow-x-hidden overflow-y-scroll p-8 grid gap-5",
              view === "list" && "grid-cols-1",
              view === "grid" && "grid-cols-2",
            )}
          >
            {filteredSessionRequests.map((request) => (
              <Request
                key={request.id}
                request={request}
                handleDecline={() => handleDecline(request.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
