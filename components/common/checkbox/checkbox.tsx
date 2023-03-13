import { InputHTMLAttributes } from 'react'

import styles from './checkbox.module.css'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = (props: CheckboxProps) => {
  const { className = '', ...rest } = props

  return (
    <input
      className={`${styles.checkbox} ${className}`}
      {...rest}
      type="checkbox"
    />
  )
}

export default Checkbox
