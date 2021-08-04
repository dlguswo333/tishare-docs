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
  // eslint-disable-next-line
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
      <img src='/tishare-docs/logo256.png' width='32px' alt='tiShare' />
      <div className={classes.Links}>
        <select defaultValue={lang} onChange={(e) => { setLang(e.target.value) }} className={classes.SelectLang}>
          {getLangs()}
        </select>
        <Link to='/tishare-docs'>
          {/* TODO Solve underline not appear at page refresh. */}
          <button className={pathname === '/tishare-docs/' || pathname === '/tishare-docs' ? classes.Current : ''} onClick={() => { setPathname('/tishare-docs') }}>HOME</button>
        </Link>
        <Link to='/tishare-docs/faq'>
          <button className={pathname === '/tishare-docs/faq' ? classes.Current : ''} onClick={() => { setPathname('/tishare-docs/faq') }}>FAQ</button>
        </Link>
      </div>
    </header>
  )
}

export default Header