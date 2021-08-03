import { BrowserRouter, Route } from 'react-router-dom'
import Main from './Main'
import Download from './Download'
import Toturial from './Toturial'
import Faq from './Faq'
import classes from './App.module.scss'
import Header from './Header'
import { useState } from 'react'

function App() {
  const [lang, setLang] = useState(window.localStorage.getItem('preferredLang'))

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header lang={lang} setLang={setLang} />
        <Route path='/tishare-docs' exact={true} component={Main} />
        <Route path='/tishare-docs/download' exact={true} component={Download} />
        <Route path='/tishare-docs/toturial' exact={true} component={Toturial} />
        <Route path='/tishare-docs/faq' exact={true} component={Faq} />
      </div>
    </BrowserRouter>
  )
}

export default App