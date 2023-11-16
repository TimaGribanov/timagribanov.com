import { Trans } from 'react-i18next'

const ProjectContent = ({ type }) => {
  switch (type) {
    case 'akfgfragments':
      return <div>
        <Trans i18nKey='projFragments' components={{
          site_anchor: <a href='https://akfgfragments.com' rel='noreferrer' target='_blank' />,
          h2: <h2 />
        }} />
      </div>
    case 'awp':
      return <div><Trans i18nKey='projAwp' components={{ h2: <h2 /> }} /></div>
    case 'akgDb':
      return <div><Trans i18nKey='projAkgDb' components={{ h2: <h2 /> }} /></div>
    case 'sms':
      return <div><Trans i18nKey='projSms' components={{ h2: <h2 /> }} /></div>
    default:
      return <div><Trans i18nKey='projBasic' /></div>
  }
}

export default ProjectContent