import 'server-only'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ru: () => import('@/dictionaries/ru.json').then((module) => module.default),
  ja: () => import('@/dictionaries/ja.json').then((module) => module.default),
  // hu: () => import('@/dictionaries/hu.json').then((module) => module.default),
  // uk: () => import('@/dictionaries/uk.json').then((module) => module.default),
  // be: () => import('@/dictionaries/be.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()