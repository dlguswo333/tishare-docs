import classes from './App.module.scss'
import { RecoilRoot } from 'recoil'
import { useEffect, useState } from 'react'
import Home from './Home'

function App() {
  return (
    <div className={classes.App}>
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    </div>
  )
}

export default App
