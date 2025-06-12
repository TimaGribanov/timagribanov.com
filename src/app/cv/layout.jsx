import {Lato} from 'next/font/google'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const lato = Lato({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

export const metadata = {
  title: 'Tima Gribanov CV',
  description: 'Timofei Gribanov\'s CV',
  creator: 'Tima Gribanov',
  metadataBase: 'https://timagribanov.com',
  keywords: ['Tima Gribanov', 'web development', 'translations'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
