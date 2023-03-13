import { useEffect, useState } from 'react'

interface UseSocialProps {
  id: number | string
}

const useSocial = (props: UseSocialProps) => {
  const { id } = props
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    if (!id) return

    void (async () => {
      setLoading(true)
      setError(undefined)

      try {
        const response = await fetch(
          `https://api.supermomos-dev.com/interview/social/${id}`
        )

        setData(await response.json())
      } catch (err) {
        setError(err.message)
        console.error(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [id])

  return { loading, data, error }
}

export default useSocial
