import { HTMLAttributes } from 'react'

import styles from './tag.module.css'

interface TagProps extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean
}

const Tag = (props: TagProps) => {
  const { className = '', selected, ...rest } = props

  return (
    <div
      className={`${styles.tag} ${
        selected ? styles.selected : ''
      } ${className}`}
      {...rest}
    />
  )
}

export default Tag
