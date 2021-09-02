import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Faq from './Faq'
import classes from './App.module.scss'
import Header from './Header'
import { RecoilRoot } from 'recoil'
import { useState } from 'react'

function App() {
  const [lang, setLang] = useState(window.localStorage.getItem('preferredLang'))
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <RecoilRoot>
          <Header lang={lang} setLang={setLang} />
          <Switch>
            <Route path='/tishare-docs/faq' component={Faq} />
            <Route path='/tishare-docs' component={Home} />
          </Switch>
        </RecoilRoot>
      </div>
    </BrowserRouter >
  )
}

export default App