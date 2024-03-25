import StudioInfoPage from "@/components/Admin/Pages/StudioInfoPage"
import StudioInfoProvider from "@/providers/StudioInfoProvider"

const StudioInfo = () => (
  <StudioInfoProvider>
    <StudioInfoPage />
  </StudioInfoProvider>
)

export default StudioInfo
