import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classes from './styles/Header.module.scss'
import { useTranslation } from 'react-i18next'

/**
 * @param {Object} props
 * @param {string} props.lang
 * @param {Function} props.setLang
 */
function Header({ lang, setLang }) {
  const [, i18n] = useTranslation()
  const [showMenu, setShowMenu] = useState(false)
  const pathname = useLocation().pathname

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
      <div className={classes.Menu}>
        <img src='/tishare-docs/logo256.png' className={classes.LogoImg} alt='tiShare' />
        <button className={classes.MenuImg} onClick={() => { setShowMenu((value) => !value) }}>
          <img src='/tishare-docs/menu.svg' alt='menu' />
        </button>
      </div>
      <div className={showMenu ? classes.Links + ' ' + classes.Show : classes.Links}>
        <select defaultValue={lang} onChange={(e) => { setLang(e.target.value) }} className={classes.SelectLang}>
          {getLangs()}
        </select>
        <Link to='/'>
          <button className={/\/$/.test(pathname) ? classes.Current : ''}>HOME</button>
        </Link>
        <Link to='/releases'>
          <button className={pathname.startsWith('/releases') ? classes.Current : ''}>Releases</button>
        </Link>
        <Link to='/faq'>
          <button className={pathname.startsWith('/faq') ? classes.Current : ''}>FAQ</button>
        </Link>
        <Link to='/policy'>
          <button className={pathname.startsWith('/policy') ? classes.Current : ''}>Policy</button>
        </Link>
      </div>
    </header>
  )
}

export default Header
