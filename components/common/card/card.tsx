import { HTMLAttributes } from 'react'

import styles from './card.module.css'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = (props: CardProps) => {
  const { className = '', ...rest } = props

  return <div className={`${styles.card} ${className}`} {...rest} />
}

export default Card
