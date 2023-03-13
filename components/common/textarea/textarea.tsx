import { TextareaHTMLAttributes } from 'react'

import styles from './textarea.module.css'

const TextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const { className = '', ...rest } = props

  return (
    <textarea
      className={`${styles.textarea} ${className}`}
      rows={8}
      {...rest}
    />
  )
}

export default TextArea
