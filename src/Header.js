import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.scss'

function Header() {
  const [pathname, setPathname] = useState(window.location.pathname)

  return (
    <header className={classes.Header}>
      <img src='/logo256.png' width='32px' alt='tiShare' />
      <div className={classes.Links}>
        <Link to='/'>
          <button className={pathname === '/' ? classes.Current : ''} onClick={() => { setPathname('/') }}>HOME</button>
        </Link>
        <Link to='toturial'>
          <button className={pathname === '/toturial' ? classes.Current : ''} onClick={() => { setPathname('/toturial') }}>TOTURIAL</button>
        </Link>
        <Link to='/faq'>
          <button className={pathname === '/faq' ? classes.Current : ''} onClick={() => { setPathname('/faq') }}>FAQ</button>
        </Link>
      </div>
    </header>
  )
}

export default Header