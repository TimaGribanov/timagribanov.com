import Localisation from '@/components/Localisation'
import {useTranslations} from 'next-intl'

const Translation = () => {
  const t = useTranslations('Translation')

  return (
    <section className="section translation" id="translation">
      <div>
        <h1>{t('header')}</h1>
        <div>
          <p>{t('basic.p1')}</p>
          <p>{t('basic.p2')}</p>
          <p>{t('basic.p3')}</p>
        </div>
        <div>
          <Localisation key={0} namespace='akfgfragments' />
          <Localisation key={1} namespace='tabby' />
        </div>
      </div>
    </section>
  )
}

export default Translation