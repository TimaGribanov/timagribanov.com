import { Trans } from "react-i18next"

const Footer = () => {
  return (
    <footer className='d-flex flex-column'>
      <div className='mt-auto mb-2'>
        <p>
          <Trans i18nKey='footerName' />
        </p>
        <p>e-mail: <a href='mailto:t.gribanow@gmail.com'>t.gribanow@gmail.com</a></p>
      </div>
    </footer>
  )
}

export default Footer