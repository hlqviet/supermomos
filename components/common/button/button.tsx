import { ButtonHTMLAttributes } from 'react'

import styles from './button.module.css'

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  type?: 'default' | 'primary'
}

const Button = (props: ButtonProps) => {
  const { className, htmlType = 'button', type = 'default', ...rest } = props

  return (
    <button
      className={`${styles[type]} ${className}`}
      type={htmlType}
      {...rest}
    />
  )
}

export default Button
