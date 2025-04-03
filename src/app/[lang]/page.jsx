import Bio from '@/components/Bio'
import Projects from '@/components/Projects'
import Links from '@/components/Links'

import {getDictionary} from './dictionaries'
import Header from '@/components/Header'
import Line from '@/components/Line'
import Translation from '@/components/Translation'
import {LOCALES} from '@/constants'

export async function generateStaticParams() {
  const localesFromFile = LOCALES.map((locale) => ({lang: locale.code}))

  return [{lang: '', ...localesFromFile}]
}

export default async function Home({params}) {
  const {lang} = await params
  const dict = await getDictionary(lang === '' ? lang : 'en')

  return (
    <div className="content">
      <Header dict={dict}/>
      <main className="main">
        <Bio dict={dict.bio}/>
        <Projects dict={dict.projects}/>
        <Translation dict={dict.translation}/>
        <Links dict={dict}/>
      </main>
      <Line/>
    </div>
  )
}
