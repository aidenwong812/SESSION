import ProjectRequestsPage from "@/components/Admin/Pages/ProjectRequestsPage"
import ProjectRequestProvider from "@/providers/ProjectRequestProvider"

const ProjectRequests = () => (
  <ProjectRequestProvider>
    <ProjectRequestsPage />
  </ProjectRequestProvider >
)

export default ProjectRequests
