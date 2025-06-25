import Project from './Project.jsx'
import {useTranslations} from "next-intl";

const Projects = () => {
  const t = useTranslations('Projects')
  return (
    <section className="section projects" id="projects">
      <div>
        <h1>{t('header')}</h1>
        <div><p>{t('basic')}</p></div>
        <div>
          <Project key={0} namespace='akfgfragments'/>
          <Project key={1} namespace='links'/>
          <Project key={2} namespace='solfa20'/>
          <Project key={3} namespace='ajikanDb'/>
          <Project key={4} namespace='sms'/>
          <Project key={5} namespace='awp'/>
        </div>
      </div>
    </section>
  )
}

export default Projects