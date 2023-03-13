import { PropsWithChildren } from 'react'

import styles from './modal-footer.module.css'

const ModalFooter = (props: PropsWithChildren<{}>) => {
  const { children } = props

  return <div className={styles.modalFooter}>{children}</div>
}

export default ModalFooter
