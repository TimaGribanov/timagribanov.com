'use client'

import {useTranslations} from "next-intl";

const Bio = () => {
  const t = useTranslations('Bio')

  return (
    <section className="section" id="about-me">
      <div>
        <h1>{t('header')}</h1>
        <p>{t('p1')}</p>
        <p>{t('p2')}</p>
        <p>{t('p3')}</p>
      </div>
    </section>
  )
}

export default Bio