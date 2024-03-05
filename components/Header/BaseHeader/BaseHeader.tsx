import Header from "../Header"

const BaseHeader = () => (
  <div className="fixed flex w-screen justify-center">
    <div
      className="flex items-center justify-between
      md:w-[768px] md:pt-[24px] lg:w-[1024px]
      lg:pt-[32px] xl:w-[1280px] xl:pt-[40px]"
    >
      <Header />
    </div>
  </div>
)

export default BaseHeader
