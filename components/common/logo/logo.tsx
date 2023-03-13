import Image from 'next/image'

import logo from 'public/images/logo.png'

const Logo = () => {
  return <Image alt="Logo" priority src={logo} />
}

export default Logo
