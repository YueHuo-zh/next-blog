import "./modal.css"
import clsx from "clsx"
import Card from "@/compoments/Card/Card"

interface ModalProps {
  children: React.ReactNode
  show: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ children, show, onClose }) => {

  return (
    <>
      { show && (
        <div onClick={onClose}>
          <div onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </>
  )
}