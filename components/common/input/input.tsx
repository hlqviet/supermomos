import { InputHTMLAttributes } from 'react'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome'

import styles from './input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: FontAwesomeIconProps['icon']
  variant?: 'small' | 'medium' | 'large'
}

const Input = (props: InputProps) => {
  const { className = '', startIcon, variant = 'medium', ...rest } = props

  return (
    <>
      {startIcon && (
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon
            className={styles[variant + 'Icon']}
            icon={startIcon}
          />
        </div>
      )}
      <input className={`${styles[variant]} ${className}`} {...rest} />
    </>
  )
}

export default Input
