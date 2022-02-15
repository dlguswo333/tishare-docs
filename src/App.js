import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Releases from './Releases'
import Faq from './Faq'
import classes from './styles/App.module.scss'
import Header from './Header'
import { RecoilRoot } from 'recoil'
import { useState } from 'react'
import Policy from './Policy'

function App() {
  const [lang, setLang] = useState(window.localStorage.getItem('preferredLang'))
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <RecoilRoot>
          <Header lang={lang} setLang={setLang} />
          <Switch>
            <Route path='/tishare-docs/releases' component={Releases} />
            <Route path='/tishare-docs/faq' component={Faq} />
            <Route path='/tishare-docs/policy' component={Policy} />
            <Route path='/tishare-docs' component={Home} />
          </Switch>
        </RecoilRoot>
      </div>
    </BrowserRouter >
  )
}

export default App
