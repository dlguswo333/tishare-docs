import './App.module.scss'
import './index.css'
import { useState } from 'react'
import Header from './Header'

function App({ Component, pageProps }) {
  const [lang, setLang] = useState(() => typeof window !== 'undefined' ? window?.localStorage?.getItem('preferredLang') : 'en')
  return <>
    <Header lang={lang} setLang={setLang} />
    <Component {...pageProps} />
  </>
}

export default App
