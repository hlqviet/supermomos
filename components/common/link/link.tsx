import { AnchorHTMLAttributes } from 'react'

import styles from './link.module.css'

const Link = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { className = '', ...rest } = props

  return <a {...rest} className={`${styles.link} ${className}`} />
}

export default Link
