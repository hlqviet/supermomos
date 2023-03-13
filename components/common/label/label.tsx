import { LabelHTMLAttributes } from 'react'

import styles from './label.module.css'

const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
  const { className = '', ...rest } = props

  return <label className={`${styles.label} ${className}`} {...rest} />
}

export default Label
