import { FieldsetHTMLAttributes, InputHTMLAttributes } from 'react'

import styles from './radio.module.css'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {}

const Radio = (props: RadioProps) => {
  const { className = '', ...rest } = props

  return (
    <input className={`${styles.radio} ${className}`} {...rest} type="radio" />
  )
}

const RadioGroup = (props: FieldsetHTMLAttributes<HTMLFieldSetElement>) => {
  const { className = '', ...rest } = props

  return <fieldset className={`${styles.radioGroup} ${className}`} {...rest} />
}

Radio.Group = RadioGroup

export default Radio
