import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from 'components/common/link'

import styles from './nav-bar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <Link href="#">Blog</Link>
        </li>
        <li>
          <Link href="#">Socials</Link>
        </li>
        <li>
          <Link href="#">Past Socials</Link>
        </li>
        <li>
          <Link href="#">
            Clubs
            <FontAwesomeIcon
              icon={faChevronDown}
              size="sm"
              style={{ marginLeft: '1rem' }}
            />
          </Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
