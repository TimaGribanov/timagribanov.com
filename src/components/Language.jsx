'use client'

import {LOCALES} from '@/constants'
import {useRouter, usePathname} from 'next/navigation'

const Language = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleLangs = event => router.push(`/${event.target.value}`)

  return (
    <select onChange={handleLangs} defaultValue={pathname.substring(1)}>
      {LOCALES.map(({code, label}) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  )
}

export default Language