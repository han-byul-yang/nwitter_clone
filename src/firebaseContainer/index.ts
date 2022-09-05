import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDM_3SY-GWQZgkzPP0eSh7zyPkPGWW6Jd0',
  authDomain: 'nwitter-clone-de633.firebaseapp.com',
  projectId: 'nwitter-clone-de633',
  storageBucket: 'nwitter-clone-de633.appspot.com',
  messagingSenderId: '106518452200',
  appId: '1:106518452200:web:0a91e4ed66d57b2075b65d',
}

const firebaseApp = initializeApp(firebaseConfig)

export const firebaseAuthService = getAuth(firebaseApp)

export const firebaseDB = getFirestore(firebaseApp)
