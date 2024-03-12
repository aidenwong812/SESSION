import { useState } from "react"
import ProjectInfoCard from "@/components/ProjectInfoCard"
import ProjectDurationSelect from "@/components/ui/ProjectDurationSelect"

const activeProjects = [
  {
    id: 1,
    name: "The Color Violet",
    tracks: 3,
    time: "Within 2 weeks",
    artist: {
      name: "Max Smith",
      avatar: "/images/Admin/session-requests-avatar.svg",
    },
  },
  {
    id: 2,
    name: "Dreams & Visions",
    tracks: 7,
    time: "Within 2 weeks",
    artist: {
      name: "Max Smith",
      avatar: "/images/Admin/session-requests-avatar.svg",
    },
  },
  {
    id: 3,
    name: "Complicationz",
    tracks: 1,
    time: "Within 2 weeks",
    artist: {
      name: "Max Smith",
      avatar: "/images/Admin/session-requests-avatar.svg",
    },
  },
  {
    id: 4,
    name: "The Color Violet",
    tracks: 3,
    time: "Within 2 weeks",
    artist: {
      name: "Max Smith",
      avatar: "/images/Admin/session-requests-avatar.svg",
    },
  },
]

export default function ActiveProjectsList() {
  const [selectedDuration, setSelectedDuration] = useState("all")

  return (
    <div className="mt-10 w-full rounded-t-3xl bg-black_8">
      <ProjectDurationSelect selected={selectedDuration} onChange={setSelectedDuration} />
      <div className="h-[600px] w-full overflow-y-auto overflow-x-hidden px-7 pb-7 pt-2.5">
        {activeProjects.map((project) => (
          <ProjectInfoCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
