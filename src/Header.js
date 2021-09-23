import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.scss'
import { useTranslation } from 'react-i18next'
import { pathnameState } from './States'
import { useRecoilState } from 'recoil'
/**
 * @param {Object} props
 * @param {string} props.lang
 * @param {Function} props.setLang
 */
function Header({ lang, setLang }) {
  const [, i18n] = useTranslation()
  const [showMenu, setShowMenu] = useState(false)
  const [pathname, setPathname] = useRecoilState(pathnameState)

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
        <button className={classes.MenuImg} onClick={() => { setShowMenu((value) => !value) }}>
          <img src='/tishare-docs/menu.svg' alt='menu' />
        </button>
      </div>
      <div className={showMenu ? classes.Links + ' ' + classes.Show : classes.Links}>
        <select defaultValue={lang} onChange={(e) => { setLang(e.target.value) }} className={classes.SelectLang}>
          {getLangs()}
        </select>
        <Link to='/tishare-docs/'>
          <button className={pathname === '/tishare-docs/' ? classes.Current : ''}>HOME</button>
        </Link>
        <Link to='/tishare-docs/faq/'>
          <button className={pathname === '/tishare-docs/faq/' ? classes.Current : ''}>FAQ</button>
        </Link>
      </div>
    </header>
  )
}

export default Header
