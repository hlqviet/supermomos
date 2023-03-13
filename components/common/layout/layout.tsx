import { PropsWithChildren } from 'react'

import Header from 'components/common/header'

import styles from './layout.module.css'

const Layout = (props: PropsWithChildren<{}>) => {
  const { children } = props

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>{children}</main>
    </div>
  )
}

export default Layout
