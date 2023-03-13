import { ComponentPropsWithoutRef } from 'react'

import Input from 'components/common/input'

import styles from './title-input.module.css'

interface TitleInputProps
  extends Omit<
    ComponentPropsWithoutRef<typeof Input>,
    'startIcon' | 'variant'
  > {}

const TitleInput = (props: TitleInputProps) => {
  const { className = '', ...rest } = props

  return (
    <Input
      className={`${styles.titleInput} ${className}`}
      defaultValue="Untitled Event"
      variant="large"
      {...rest}
    />
  )
}

export default TitleInput
