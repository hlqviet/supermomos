import { HTMLAttributes } from 'react'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome'

import styles from './text.module.css'

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  size?: 'large' | 'medium'
  startIcon?: FontAwesomeIconProps['icon']
}

const Text = (props: TextProps) => {
  const {
    children,
    className = '',
    size = 'medium',
    startIcon,
    ...rest
  } = props

  return (
    <span className={`${styles[size]} ${className}`} {...rest}>
      {startIcon && (
        <span className={styles.iconWrapper}>
          <FontAwesomeIcon
            className={`${styles[size + 'Icon']}`}
            icon={startIcon}
          />
        </span>
      )}
      {children}
    </span>
  )
}

export default Text
