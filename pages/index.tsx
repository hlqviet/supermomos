import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Home = () => {
  const { push } = useRouter()

  useEffect(() => {
    push('/socials/create')
  }, [push])

  return null
}

export default Home
