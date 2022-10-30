import classes from './App.module.scss'
import { RecoilRoot } from 'recoil'
import { useEffect, useState } from 'react'
import i18nInit from '../src/i18nInit'
import Home from './Home'

if (typeof window !== 'undefined') {
  i18nInit()
}

function App() {
  const [lang, setLang] = useState('en')
  useEffect(() => {
    setLang(window.localStorage.getItem('preferredLang') ?? 'en')
  }, [])
  return (
    <div className={classes.App}>
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    </div>
  )
}

export default App
