import {LOCALES} from '@/constants.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: LOCALES.map((locale) => locale.code),
    defaultLocale: 'en',
  },
  distDir: 'build',
}

export default nextConfig
