/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ru', 'ja'],
    defaultLocale: 'en',
  },
  distDir: 'build',
}

export default nextConfig
