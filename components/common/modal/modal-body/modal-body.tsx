import { PropsWithChildren } from 'react'

import styles from './modal-body.module.css'

const ModalBody = (props: PropsWithChildren<{}>) => {
  const { children } = props

  return <div className={styles.modalBody}>{children}</div>
}

export default ModalBody
