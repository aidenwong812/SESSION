import { useBookSession } from "@/providers/BookSessionProvider"
import Modal from "@/shared/Modal"
import Media from "@/shared/Media"
import Button from "@/shared/Button"
import useIsMobile from "@/hooks/useIsMobile"
import Container from "@/components/Container"
import EquipmentDetail from "@/components/EquipmentDetail"
import ClipSpan from "@/components/ClipSpan"
import SingleStudio from "../SingleStudio"

const EquipmentModal = () => {
  const { isOpenEquipmentModal, setIsOpenEquipmentModal, studioOnModal } = useBookSession()
  const isMobile = useIsMobile()

  return (
    <Modal
      isVisible={isOpenEquipmentModal}
      onClose={() => setIsOpenEquipmentModal(!isOpenEquipmentModal)}
      modalClassName="bg-[#121211cc] backdrop-blur-[20px] px-[20px]"
      containerClassName="h-full flex justify-center overflow-hidden"
    >
      <div
        className="no-scrollbar max-h-screen w-full overflow-y-auto
            overflow-x-hidden px-[10px] pt-[100px] samsungS8:px-0 md:w-[768px]
            md:px-[30px] md:pb-[50px] lg:w-[1024px] xl:w-[1280px]"
      >
        <Container
          containerClassName={`${isMobile && "border-none !bg-none"}`}
          className={`${isMobile && "hidden"}`}
        >
          <Button
            id="room-capcity"
            className="!absolute left-[10px] top-[10px]
            z-[10] aspect-[1/1] w-[44px] bg-[#121211cc] 
            bg-none font-urwgeometric_bold shadow-none
            backdrop-blur-[20px] md:left-[30px]
            md:top-[30px] lg:left-[40px] lg:top-[40px] xl:left-[50px] xl:top-[50px]"
            bgVariant="primary"
          >
            <div className="flex w-full items-center justify-center gap-x-[1px]">
              <Media
                type="image"
                link="/images/BookSession/users.svg"
                blurLink="/images/BookSession/users.png"
                containerClasses="w-[20px] aspect-[1/1]"
              />
              <ClipSpan className="text-[12px]">{studioOnModal?.userNumber}</ClipSpan>
            </div>
          </Button>
          <Button
            id="room-detail-close-btn"
            className="!absolute right-[10px] top-[10px]
            z-[10] aspect-[1/1] w-[44px] border-x-[1px] 
            border-b-[2px] border-x-gray_overlay_6
            border-b-gray_overlay_6 bg-[#121211cc]
            bg-none !shadow-none
            backdrop-blur-[20px] md:right-[30px] md:top-[30px]
            lg:right-[40px] lg:top-[40px]
            xl:right-[50px] xl:top-[50px]"
            onClick={() => setIsOpenEquipmentModal(!isOpenEquipmentModal)}
            bgVariant="primary"
          >
            <Media
              type="image"
              link="/images/BookSession/close.svg"
              blurLink="/images/BookSession/close.png"
              containerClasses="w-[16px] md:w-[9.6px] lg:w-[12.8pxpx] xl:w-[16px] aspect-[1/1]"
            />
          </Button>
          <SingleStudio data={studioOnModal} />
          <EquipmentDetail
            className="mt-[20px] md:mt-[14.4px] lg:mt-[19.2px] xl:mt-[24px]"
            data={studioOnModal}
          />
        </Container>
      </div>
    </Modal>
  )
}

export default EquipmentModal
