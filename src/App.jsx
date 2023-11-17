import { Suspense, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

const App = () => {
  const [language, setLanguage] = useState('en')
  const [content, setContent] = useState('bio')
  const [projType, setProjType] = useState('')
  const [projMenuActive, setProjMenuActive] = useState([])

  const { i18n, t } = useTranslation()

  const handleLangs = event => {
    const langCode = event.target.value
    i18next.changeLanguage(langCode)
    setLanguage(langCode)
  }

  const handleMenuClick = type => {
    setContent(type)
  }

  const handleProjType = type => {
    if (type === projType)
      setProjType('')
    else
      setProjType(type)
  }

  const handleProjMenuActive = type => {
    if (projMenuActive[0] === type)
      projMenuActive[1] === true
        ? setProjMenuActive([])
        : setProjMenuActive([type, true])
    else
      setProjMenuActive([type, true])
  }

  return (
    <>
      <Suspense fallback='loading'>
        <Header handleLangs={handleLangs} />
        <Main
          handleMenuClick={handleMenuClick}
          handleProjType={handleProjType}
          handleProjMenuActive={handleProjMenuActive}
          projMenuActive={projMenuActive}
          projType={projType}
          content={content}
        />
        <Footer />
      </Suspense>
    </>
  )
}

export default App