module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'supermomos-app-resources-us.s3.amazonaws.com',
        port: '',
        pathname: '/Images/SocialBanner/**'
      }
    ],
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/socials/create',
        permanent: true
      }
    ]
  }
}
