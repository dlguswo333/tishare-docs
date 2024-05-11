import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enLang from '../public/lang/en.json';
import koLang from '../public/lang/ko.json';

function i18nInit () {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: enLang
      },
      ko: {
        translation: koLang
      }
    },
    supportedLngs: [
      'en', 'ko'
    ],
    fallbackLng: ['en', 'ko'],
    lng: 'en',
    debug: false,
  }, (err) => {
    if (err)
      console.log('i18n init error', err);
  });
}

export default i18nInit;
