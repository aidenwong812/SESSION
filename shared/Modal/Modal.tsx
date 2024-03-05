import React, { ReactNode } from "react"
import Media from "../Media"
import { CloseBlurIcon, CloseIcon } from "../Icons"

interface IModal {
  onClose: () => any
  showCloseButton?: boolean
  children: ReactNode
  isVisible: Boolean
  containerClassName?: string
  closeButtonClassName?: string
  modalClassName?: string
}

function Modal({
  onClose,
  showCloseButton,
  children,
  isVisible,
  modalClassName,
  containerClassName,
  closeButtonClassName,
}: IModal) {
  return (
    <div
      className={`fixed left-0 top-0
        z-[9999] h-screen w-screen
        ${modalClassName || ""}
        ${isVisible ? "block" : "hidden"}
      `}
      onClick={async (e) => (e.target === e.currentTarget && onClose ? await onClose() : () => {})}
    >
      {isVisible && (
        <div
          className={`relative 
        ${containerClassName || ""}`}
        >
          {showCloseButton && (
            <div
              className={`absolute 
              z-[5] flex size-6 cursor-pointer
              items-center justify-center rounded-full 
              ${closeButtonClassName || ""}`}
              onClick={onClose}
            >
              <Media
                type="image"
                link={CloseIcon}
                blurLink={CloseBlurIcon}
                containerClasses="w-[32px] aspect-[1/1]"
              />
            </div>
          )}
          {children}
        </div>
      )}
    </div>
  )
}

export default Modal
