import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Faq from './Faq'
import classes from './App.module.scss'
import Header from './Header'
import ErrorPage from './ErrorPage'
import { useState } from 'react'

function App() {
  const [lang, setLang] = useState(window.localStorage.getItem('preferredLang'))
  const [pathname, setPathname] = useState(window.location.pathname)

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header lang={lang} setLang={setLang} pathname={pathname} setPathname={setPathname} />
        <Switch>
          <Route path='/tishare-docs/' exact component={Home} />
          <Route path='/tishare-docs/faq/' component={Faq} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter >
  )
}

export default App