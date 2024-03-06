import { useState } from "react"
import Modal from "@/shared/Modal"
import Media from "@/shared/Media"
import DetailHeader from "./DetailHeader"
import DetailBody from "./DetailBody"
import ConfirmModal from "../ConfirmModal"
import DeclineModal from "../DeclineModal"

const RequestDetailModal = ({ request, isVisible, toggleModal, handleDecline }) => {
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false)
  const [isOpenDeclineModal, setIsOpenDeclineModal] = useState(false)

  const onClickConfirm = () => {
    toggleModal()
    setIsOpenConfirmModal(true)
  }

  const onClickDecline = () => {
    toggleModal()
    setIsOpenDeclineModal(true)
  }

  return (
    <>
      <Modal
        isVisible={isVisible}
        onClose={toggleModal}
        modalClassName="bg-[#121211cc] backdrop-blur-[20px] px-[20px]"
        containerClassName="h-full flex flex-col items-center justify-center overflow-hidden py-[20px]"
      >
        <div
          className="no-scrollbar w-full overflow-y-auto overflow-x-hidden rounded-[48px] bg-black_8
          shadow-session_shadow_120 md:w-[768px] lg:w-[1024px] xl:w-[1280px]"
        >
          <DetailHeader onClose={toggleModal} />
          <DetailBody request={request} />
        </div>
        <div className="flex gap-x-[20px] rounded-full bg-black_8_24 p-[12px]">
          <button
            type="button"
            className="flex size-[64px] items-center justify-center rounded-full
          border-x-[1px] border-b-[2px] border-gray_overlay_6 bg-black_8"
            onClick={onClickDecline}
          >
            <Media
              type="image"
              link="/images/Admin/session-detail-close.svg"
              blurLink="/images/Admin/session-detail-close.png"
              containerClasses="w-[22px] h-[22px]"
            />
          </button>
          <button
            type="button"
            className="flex size-[64px] items-center justify-center rounded-full
          border-x-[1px] border-b-[2px] border-gray_overlay_6 bg-gradient_s_1"
            onClick={onClickConfirm}
          >
            <Media
              type="image"
              link="/images/Admin/session-detail-check.svg"
              blurLink="/images/Admin/session-detail-check.png"
              containerClasses="w-[44px] h-[44px]"
            />
          </button>
        </div>
      </Modal>
      <ConfirmModal
        isVisible={isOpenConfirmModal}
        toggleModal={() => setIsOpenConfirmModal(!isOpenConfirmModal)}
      />
      <DeclineModal
        isVisible={isOpenDeclineModal}
        toggleModal={() => setIsOpenDeclineModal(!isOpenDeclineModal)}
        handleDecline={handleDecline}
      />
    </>
  )
}

export default RequestDetailModal
