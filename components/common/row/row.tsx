import { HTMLAttributes } from 'react'

import styles from './row.module.css'

interface RowProps extends HTMLAttributes<HTMLDivElement> {}

const Row = (props: RowProps) => {
  const { className = '', ...rest } = props

  return <div className={`${styles.row} ${className}`} {...rest} />
}

export default Row
