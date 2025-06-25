'use client'

import Language from './Language'
import {Link} from '@/i18n/navigation'
import {useTranslations} from 'next-intl'

const Header = () => {
  const t = useTranslations('Header')

  return (
    <header className="section">
      <div>
        <div className="name-div">
          <span className="name">tima gribanov</span>
        </div>
        <nav>
          <Link href="#about-me">{t('bio')}</Link>
          <Link href="#projects">{t('projects')}</Link>
          <Link href="#translation">{t('trans')}</Link>
          <Link href="#links">{t('links')}</Link>
          <Language/>
        </nav>
      </div>
    </header>
  )
}

export default Header