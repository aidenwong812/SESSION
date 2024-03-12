import ActiveProjectsPage from "@/components/Admin/Pages/ActiveProjectsPage"
import ProjectRequestProvider from "@/providers/ProjectRequestProvider"

const ActiveProject = () => (
  <ProjectRequestProvider>
    <ActiveProjectsPage />
  </ProjectRequestProvider>
)

export default ActiveProject
