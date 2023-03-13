import { HTMLAttributes } from 'react'

import styles from './title.module.css'

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: number
}

const Title = (props: TitleProps) => {
  const { className = '', level = 2, ...rest } = props
  const combinedProps = {
    className: `${styles[`level${level}`]} ${className}`,
    ...rest
  }

  switch (level) {
    case 1:
      return <h1 {...combinedProps} />
    case 2:
      return <h2 {...combinedProps} />
    case 3:
      return <h3 {...combinedProps} />
    case 4:
      return <h4 {...combinedProps} />
    case 5:
      return <h5 {...combinedProps} />
  }
}

export default Title
