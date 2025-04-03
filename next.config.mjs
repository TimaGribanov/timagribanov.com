/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',

  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
