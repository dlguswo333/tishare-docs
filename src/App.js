import { Route, Switch, HashRouter } from 'react-router-dom'
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
    <HashRouter>
      <div className={classes.App}>
        <RecoilRoot>
          <Header lang={lang} setLang={setLang} />
          <Switch>
            <Route path='/tishare-docs' component={Home} />
            <Route path='/releases' component={Releases} />
            <Route path='/faq' component={Faq} />
            <Route path='/policy' component={Policy} />
          </Switch>
        </RecoilRoot>
      </div>
    </HashRouter>
  )
}

export default App
