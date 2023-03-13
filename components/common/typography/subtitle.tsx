import { HTMLAttributes } from 'react'

import styles from './subtitle.module.css'

interface SubtitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const Subtitle = (props: SubtitleProps) => {
  const { className = '', ...rest } = props

  return <h2 className={`${styles.subtitle} ${className}`} {...rest} />
}

export default Subtitle
