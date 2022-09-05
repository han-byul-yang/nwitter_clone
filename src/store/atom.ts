import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

/* const { persistAtom } = recoilPersist({
  key: 'storeDatas',
  storage: localStorage,
}) */

export const userIdAtom = atom({
  key: 'userId',
  default: '',
})
