import {useTranslations} from "next-intl";

const Links = () => {
  const t = useTranslations('Links')

  return (
    <section className="section" id="links">
      <div className="links">
        <h1>{t('links')}</h1>
        <p>LinkedIn: <a href='https://www.linkedin.com/in/timagribanov/' target='_blank'>in/timagribanov</a></p>
        <p>Github: <a href='https://github.com/TimaGribanov' target='_blank'>TimaGribanov</a></p>
        <p><a href='https://timagribanov.com/cv/' target='_blank'>{t('cv')}</a></p>
      </div>
    </section>
  )
}

export default Links