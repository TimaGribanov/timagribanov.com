'use client'

import {LOCALES} from '@/constants'
import {useRouter, usePathname} from '@/i18n/navigation'
import {useLocale} from "next-intl";

const Language = () => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const handleLangs = event => {
    const newLocale = event.target.value
    router.replace(pathname, {locale: newLocale})
  }

  console.log(locale)

  return (
    <select onChange={handleLangs} defaultValue={locale}>
      {LOCALES.map(({code, label}) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  )
}

export default Language