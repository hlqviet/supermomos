import { PropsWithChildren, ReactNode } from 'react'

import ModalHeader from 'components/common/modal/modal-header'
import ModalBody from 'components/common/modal/modal-body'
import ModalFooter from 'components/common/modal/modal-footer'

import styles from './modal.module.css'

interface ModalProps {
  footer: ReactNode
  title: string
  visible?: boolean
  onCancel?: () => void
}

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { children, footer, title, visible, onCancel } = props

  return (
    <div
      className={styles.modalWrapper}
      style={{ display: visible ? 'block' : 'none' }}>
      <div className={styles.modal}>
        <ModalHeader onCancel={onCancel}>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </div>
    </div>
  )
}

export default Modal
