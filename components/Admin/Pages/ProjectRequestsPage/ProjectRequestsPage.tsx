import { useMemo, useState } from "react"
import { Dayjs } from "dayjs"
import { twJoin } from "tailwind-merge"
import Layout from "@/components/Layout"
import Search from "@/components/ui/Search"
import Icon from "@/components/ui/Icon"
import ProjectDurationSelect from "@/components/ui/ProjectDurationSelect"
import ViewSwitch, { ViewType } from "@/components/ui/ViewSwitch"
import ProjectInfoCard from "@/components/ProjectInfoCard"
import { useProjectRequest } from "@/providers/ProjectRequestProvider"
import TimeBar from "../TimeBar"

export default function ProjectRequestsPage() {
  const [view, setView] = useState<ViewType>("list")
  const [selectedDuration, setSelectedDuration] = useState<"all" | [Dayjs, Dayjs]>("all")

  const { projectRequests } = useProjectRequest()

  const filteredProjectRequests = useMemo(() => {
    if (selectedDuration === "all") {
      return projectRequests.filter((project) => project.booked === false)
    }
    return projectRequests.filter(
      (project) => project.timeframe.value === selectedDuration && project.booked === false,
    )
  }, [projectRequests, selectedDuration])

  return (
    <Layout type="admin">
      <div className="px-5">
        <TimeBar />
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Icon name="Sparkle" size={40} weight="fill" className="text-project" />
            <p className="font-urwgeometric text-5xl leading-none text-gray_1">
              Project Requests
              <span className="font-urwgeometric text-3xl text-project">
                {" "}
                {filteredProjectRequests.length}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-5 rounded-3xl bg-gray_overlay_6 p-5">
            <ViewSwitch view={view} setView={setView} />
            <Search className="w-80" placeholder="Search for Artist/Band..." />
          </div>
        </div>
        <div className="mt-10 w-full rounded-t-3xl bg-black_8">
          <ProjectDurationSelect selected={selectedDuration} onChange={setSelectedDuration} />
          <div
            className={twJoin(
              "grow overflow-x-hidden overflow-y-scroll p-8 grid gap-5",
              view === "list" && "grid-cols-1",
              view === "grid" && "grid-cols-2",
            )}
          >
            {filteredProjectRequests.map((project) => (
              <ProjectInfoCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
