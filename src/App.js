import { BrowserRouter, Route } from 'react-router-dom'
import Main from './Main'
import Download from './Download'
import Toturial from './Toturial'
import Faq from './Faq'
import classes from './App.module.scss'
import Header from './Header'
import { useState } from 'react'
import { basename } from './def.json'

function App() {
  const [lang, setLang] = useState(window.localStorage.getItem('preferredLang'))

  return (
    <BrowserRouter basename={basename}>
      <div className={classes.App}>
        <Header lang={lang} setLang={setLang} />
        <Route path='/' exact={true} component={Main} />
        <Route path='/download' exact={true} component={Download} />
        <Route path='/toturial' exact={true} component={Toturial} />
        <Route path='/faq' exact={true} component={Faq} />
      </div>
    </BrowserRouter>
  )
}

export default App