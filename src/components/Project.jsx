import {useTranslations} from 'next-intl'

const Project = ({namespace}) => {
  const t = useTranslations(`Projects.${namespace}`)

  return (
    <div className="project-block">
      <h2><a href={t('url')}>{t('title')}</a></h2>
      <p><a href={t('github')} className="github-link">github</a></p>
      <p>{t('description')}</p>
      <p><em>{t('technologies')}</em></p>
    </div>
  )
}

export default Project