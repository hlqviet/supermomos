import Logo from 'components/common/logo'
import NavBar from 'components/common/nav-bar'

import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <NavBar />
    </div>
  )
}

export default Header
