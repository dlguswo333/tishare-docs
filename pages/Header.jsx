import {useEffect, useState} from 'react';
import Link from 'next/link';
import classes from './Header.module.scss';
import {useTranslation} from 'react-i18next';
import {useRouter} from 'next/router';

/**
 * @param {Object} props
 * @param {string} props.lang
 * @param {Function} props.setLang
 */
function Header ({lang, setLang}) {
  const [, i18n] = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const {pathname} = useRouter();

  // Get preferred language.
  useEffect(() => {
    const preferredLang = localStorage.getItem('preferredLang') ?? 'en';
    if (preferredLang && i18n.languages.includes(preferredLang)) {
      setLang(preferredLang);
    }
    else {
      // Set default to english.
      localStorage.removeItem('preferredLang');
      setLang('en');
    }
  }, []);

  // Update language settings on select.
  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem('preferredLang', lang);
  }, [lang, i18n]);

  function getLangs () {
    const langs = i18n.languages;
    const ret = [];
    if (!langs) {
      return null;
    }
    for (let lang of langs) {
      ret.push(<option value={lang} key={lang}>{i18n.getResource(lang, 'translation', 'lang')}</option>);
    }
    return ret;
  }

  return (
    <header className={classes.Header}>
      <div className={classes.Menu}>
        <img src='/tishare-docs/logo256.png' className={classes.LogoImg} alt='tiShare' />
        <button className={classes.MenuImg} onClick={() => { setShowMenu((value) => !value); }}>
          <img src='/tishare-docs/menu.svg' alt='menu' />
        </button>
      </div>
      <div className={showMenu ? classes.Links + ' ' + classes.Show : classes.Links}>
        <select value={lang} onChange={(e) => setLang(e.target.value)} className={classes.SelectLang}>
          {getLangs()}
        </select>
        <Link href='/'>
          <button className={/\/$/.test(pathname) ? classes.Current : ''}>HOME</button>
        </Link>
        <Link href='/releases'>
          <button className={pathname.startsWith('/releases') ? classes.Current : ''}>Releases</button>
        </Link>
        <Link href='/faq'>
          <button className={pathname.startsWith('/faq') ? classes.Current : ''}>FAQ</button>
        </Link>
        <Link href='/policy'>
          <button className={pathname.startsWith('/policy') ? classes.Current : ''}>Policy</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
