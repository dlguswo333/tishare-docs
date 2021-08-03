import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enLang from './lang/en.json'
import koLang from './lang/ko.json'

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
  lng: localStorage.getItem('preferredLang') || 'en',
  debug: false
}, (err) => {
  if (err)
    console.log('i18n init error', err)
})

export default i18n