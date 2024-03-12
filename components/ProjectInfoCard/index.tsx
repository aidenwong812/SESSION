import { useState } from "react"
import Button from "@/shared/Button"
import Media from "@/shared/Media"
import { useProjectRequest } from "@/providers/ProjectRequestProvider"
import ProjectDetailModal from "../Admin/Pages/ProjectRequestsPage/ProjectDetailModal"

export default function ProjectInfoCard({ project }) {
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false)
  const { setSelectedRequest } = useProjectRequest()

  return (
    <>
      <div className="my-5 flex h-36 w-full items-center justify-between overflow-hidden rounded-3xl">
        <div className="relative flex h-full grow items-center justify-between bg-[url('/images/Admin/session-requests-studio-1.png')] bg-cover bg-center px-5 py-4">
          <div className="absolute left-0 top-0 size-full bg-black_3" />

          <div className="z-10 flex items-center gap-2">
            <Media type="image" containerClasses="size-16" link="/images/Admin/project-3d.svg" />
            <div className="space-y-1">
              <div className="font-urwgeometric_semibold text-2xl text-project">
                {project?.projectName}
              </div>
              <div className="flex items-center gap-2 font-urwgeometric_light">
                <span className="text-gray_1">
                  {project?.trackList && project?.trackList.length} tracks
                </span>
                <span className="text-gray_2">•</span>
                <span className="text-gray_2">{project?.timeframe?.label}</span>
              </div>
            </div>
          </div>

          <div className="z-10 space-y-1">
            <p className="text-right font-urwgeometric text-sm text-gray_2">Artist/Band</p>
            <div className="flex items-center gap-x-1">
              <Media
                type="image"
                containerClasses="w-6 h-6 rounded-full overflow-hidden"
                link={project?.artist?.avatar}
              />
              <p className="whitespace-nowrap font-urwgeometric text-2xl leading-none text-gray_1">
                {project?.bandName}
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-full w-52 items-center justify-center bg-gray_overlay_3 p-4">
          <Button
            id="see-details"
            type="button"
            className="!h-7 w-full !p-0 !shadow-session_shadow"
            pulseColor="white"
            bgVariant="radial"
            onClick={() => {
              setIsOpenDetailModal(!isOpenDetailModal)
              setSelectedRequest(project)
            }}
          >
            <p className="font-urwgeometric_semibold text-xs leading-4 text-black_0">See Details</p>
          </Button>
        </div>
      </div>
      <ProjectDetailModal
        isVisible={isOpenDetailModal}
        toggleModal={() => setIsOpenDetailModal(!isOpenDetailModal)}
      />
    </>
  )
}
