import { Trans } from 'react-i18next'

const Links = () => {
  return (
    <div>
      <p><Trans i18nKey='links' /></p>
      <p>LinkedIn: <a href='https://www.linkedin.com/in/timagribanov/' target='_blank'>in/timagribanov</a></p>
      <p>Github: <a href='https://github.com/TimaGribanov' target='_blank'>TimaGribanov</a></p>
      <p><a href='https://timagribanov.com/cv/' target='_blank'>My CV</a></p>
    </div>
  )
}

export default Links