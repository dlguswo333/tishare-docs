import classes from './App.module.scss';
import './index.css';
import {useState} from 'react';
import Header from './Header';
import i18nInit from '../src/i18nInit';

i18nInit();

function App ({Component, pageProps}) {
  const [lang, setLang] = useState('en');

  return <div className={classes.App}>
    <Header lang={lang} setLang={setLang} />
    <Component {...pageProps} />
  </div>;
}

export default App;
