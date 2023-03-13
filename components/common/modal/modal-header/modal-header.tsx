import { PropsWithChildren } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

import styles from './modal-header.module.css'

interface ModalHeaderProps {
  onCancel?: () => void
}

const ModalHeader = (props: PropsWithChildren<ModalHeaderProps>) => {
  const { children, onCancel } = props

  return (
    <div className={styles.modalHeader}>
      {children} <FontAwesomeIcon icon={faClose} onClick={onCancel} />
    </div>
  )
}

export default ModalHeader
