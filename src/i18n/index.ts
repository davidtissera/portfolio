import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import englishTranslations from './translations/english.json'
import spanishTranslations from './translations/spanish.json'

const translations = {
  en: englishTranslations,
  es: spanishTranslations
}

const i18nConfig = {
  resources: translations,
  fallbackLng: 'en',
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nConfig)

export default i18n
