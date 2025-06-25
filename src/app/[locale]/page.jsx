import Bio from '@/components/Bio'
import Projects from '@/components/Projects'
import Links from '@/components/Links'
import Header from '@/components/Header'
import Line from '@/components/Line'
import Translation from '@/components/Translation'
import {use} from 'react'
import {setRequestLocale} from 'next-intl/server'

export default function Home({params}) {
  const {locale} = use(params)
  setRequestLocale(locale)

  return (
    <div className="content">
      <Header/>
      <main className="main">
        <Bio/>
        <Projects/>
        <Translation/>
        <Links/>
      </main>
      <Line/>
    </div>
  )
}
