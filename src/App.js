import { BrowserRouter, Route, Redirect } from 'react-router-dom'
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
        <Redirect from="/:url*(/+)" to={(window.location.pathname.endsWith('/') ? window.location.pathname.slice(0, -1) : window.location.pathname)} />
        <Route path='/tishare-docs' exact component={Main} />
        <Route path='/tishare-docs/download' component={Download} />
        <Route path='/tishare-docs/toturial' component={Toturial} />
        <Route path='/tishare-docs/faq' component={Faq} />
      </div>
    </BrowserRouter >
  )
}

export default App