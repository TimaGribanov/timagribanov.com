import {useTranslations} from 'next-intl'

const Localisation = ({namespace}) => {
  const t = useTranslations(`Translation.localisation.${namespace}`)

  return (
    <div className="localisation-block">
      <h2>{t('title')}</h2>
      <p><a href={t('url')} className="github-link">link</a></p>
      <p>{t('description')}</p>
    </div>
  )
}

export default Localisation