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
  debug: true
}, (err) => {
  console.log('loaded i18n')
  if (err)
    console.log(err)
})

export default i18n