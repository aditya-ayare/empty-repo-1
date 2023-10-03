module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/abc',
        destination: '/abc/xyz',
        permanent: true,
      },
    ]
  },
}