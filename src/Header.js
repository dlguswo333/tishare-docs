import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.scss'
import { useTranslation } from 'react-i18next'

/**
 * @param {Object} props
 * @param {string} props.lang
 * @param {Function} props.setLang
 * @param {string} props.pathname
 * @param {Function} props.setPathname
 */
function Header({ lang, setLang, pathname, setPathname }) {
  const [, i18n] = useTranslation()
  const [showMenu, setShowMenu] = useState(false)

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

  useEffect(() => {
    if (!pathname.endsWith('/'))
      setPathname(pathname + '/')
  }, [pathname, setPathname])

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
        <img src='/tishare-docs/menu.svg' className={classes.MenuImg} alt='menu' onClick={() => { setShowMenu((value) => !value) }} />
      </div>
      <div className={showMenu ? classes.Links + ' ' + classes.Show : classes.Links}>
        <select defaultValue={lang} onChange={(e) => { setLang(e.target.value) }} className={classes.SelectLang}>
          {getLangs()}
        </select>
        <Link to='/tishare-docs/'>
          {/* TODO Solve underline not appear at page refresh. */}
          <button className={pathname === '/tishare-docs/' ? classes.Current : ''} onClick={() => { setPathname('/tishare-docs') }}>HOME</button>
        </Link>
        <Link to='/tishare-docs/faq/'>
          <button className={pathname === '/tishare-docs/faq/' ? classes.Current : ''} onClick={() => { setPathname('/tishare-docs/faq') }}>FAQ</button>
        </Link>
      </div>
    </header>
  )
}

export default Header