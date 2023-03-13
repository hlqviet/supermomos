import { HTMLAttributes } from 'react'

import styles from './paragraph.module.css'

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

const Paragraph = (props: ParagraphProps) => {
  const { className = '', ...rest } = props

  return <p className={`${styles.paragraph} ${className}`} {...rest} />
}

export default Paragraph
