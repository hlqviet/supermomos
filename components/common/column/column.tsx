import { HTMLAttributes } from 'react'

import styles from './column.module.css'

interface ColumnProps extends HTMLAttributes<HTMLDivElement> {}

const Column = (props: ColumnProps) => {
  const { className = '', ...rest } = props

  return <div className={`${styles.column} ${className}`} {...rest} />
}

export default Column
