/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      }
    ]
  },
  distDir: 'build',
}

export default nextConfig
