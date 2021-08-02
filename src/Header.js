import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.scss'
import { useTranslation } from 'react-i18next'

/**
 * @param {Object} props
 * @param {string} props.lang
 * @param {Function} props.setLang
 */
function Header({ lang, setLang }) {
  const [t, i18n] = useTranslation()
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    if (lang && i18n.languages.includes(lang)) {
      window.localStorage.setItem('preferredLang', lang)
      i18n.changeLanguage(lang)
    }
    else {
      // Set default to english.
      window.localStorage.removeItem('preferredLang')
      i18n.changeLanguage('en')
    }
  }, [lang, i18n])

  function getLangs() {
    const langs = i18n.languages
    const ret = []
    for (let lang of langs) {
      ret.push(<option value={lang} key={lang}>{i18n.getResource(lang, 'translation', 'lang')}</option>)
    }
    return ret
  }

  return (
    <header className={classes.Header}>
      <img src={'/tishare-docs/logo256.png'} width='32px' alt='tiShare' />
      <div className={classes.Links}>
        <select defaultValue={lang} onChange={(e) => { setLang(e.target.value) }} className={classes.SelectLang}>
          {getLangs()}
        </select>
        <Link to='/'>
          {/* Because of subdomain problem, the below path checking has to be like that... */}
          <button className={pathname === '/' || pathname === '/tishare-docs/' ? classes.Current : ''} onClick={() => { setPathname('/') }}>HOME</button>
        </Link>
        <Link to='/download'>
          <button className={pathname === '/download' ? classes.Current : ''} onClick={() => { setPathname('/download') }}>DOWNLOAD</button>
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