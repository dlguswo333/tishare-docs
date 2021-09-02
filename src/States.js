import { atom } from 'recoil'

const pathnameState = atom({
  key: 'pathnameState',
  default: '/tishare-docs/'
})

export { pathnameState }