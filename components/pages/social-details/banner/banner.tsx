import styles from './banner.module.css'

interface BannerProps {
  url: string
}

const Banner = (props: BannerProps) => {
  const { url } = props

  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url('${url}')`,
        border: url ? 'none' : undefined
      }}
    />
  )
}

export default Banner
