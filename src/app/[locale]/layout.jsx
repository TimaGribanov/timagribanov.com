import {Noto_Serif, Shippori_Mincho} from 'next/font/google'
import './globals.css'
import {notFound} from "next/navigation";
import {hasLocale, NextIntlClientProvider} from "next-intl"
import {routing} from '@/i18n/routing'
import {setRequestLocale} from "next-intl/server";

const notoSerif = Noto_Serif({
  subsets: ['latin-ext', 'cyrillic-ext'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

const shipporiMincho = Shippori_Mincho({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
  style: ['normal']
})

export const metadata = {
  title: 'tima gribanov',
  description: 'Personal website for Tima Gribanov',
  creator: 'Tima Gribanov',
  metadataBase: 'https://timagribanov.com',
  keywords: ['Tima Gribanov', 'web development', 'translations'],
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

export default async function LocaleLayout({children, params}) {
  const {locale} = await params
  if (!hasLocale(routing.locales, locale)) notFound()

  setRequestLocale(locale)

  return (
    <html lang={locale}>
    <body className={`${notoSerif.className} ${shipporiMincho.className}`}>
    <NextIntlClientProvider>
      {children}
    </NextIntlClientProvider>
    </body>
    </html>
  )
}
