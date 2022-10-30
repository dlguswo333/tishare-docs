import './App.module.scss'
import './index.css'
import { useState, useEffect } from 'react'
import Header from './Header'
import i18nInit from '../src/i18nInit'

if (typeof window !== 'undefined') {
  i18nInit()
}

function App({ Component, pageProps }) {
  const [lang, setLang] = useState(() => typeof window !== 'undefined' ? window?.localStorage?.getItem('preferredLang') : 'en')
  useEffect(() => {
    setLang(window.localStorage.getItem('preferredLang') ?? 'en')
  }, [])
  return <>
    <Header lang={lang} setLang={setLang} />
    <Component {...pageProps} />
  </>
}

export default App
