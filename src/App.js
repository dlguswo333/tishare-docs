import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Faq from './Faq'
import classes from './App.module.scss'
import Header from './Header'
import { useState } from 'react'

function App() {
  const [lang, setLang] = useState(window.localStorage.getItem('preferredLang'))

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Redirect from="/:url*(/+)"
          to={(window.location.pathname.endsWith('/') ? window.location.pathname.slice(0, -1) : window.location.pathname)} />
        <Header lang={lang} setLang={setLang} />
        <Route path='/tishare-docs' exact component={Home} />
        {/* <Route path='/tishare-docs/toturial' component={Toturial} /> */}
        <Route path='/tishare-docs/faq' component={Faq} />
      </div>
    </BrowserRouter >
  )
}

export default App