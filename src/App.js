import { BrowserRouter, Route } from 'react-router-dom'
import Main from './Main'
import Toturial from './Toturial'
import Faq from './Faq'
import classes from './App.module.scss'
import Header from './Header'

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path='/' exact={true} component={Main} />
        <Route path='/toturial' exact={true} component={Toturial} />
        <Route path='/faq' exact={true} component={Faq} />
      </div>
    </BrowserRouter>
  )
}

export default App