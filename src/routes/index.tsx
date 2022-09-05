import Layout from 'components/Layout'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuthService } from 'firebaseContainer'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import Auth from './auth'
import Main from './main'

const App = () => {
  const [isAuthed, setIsAuthed] = useState(false)
  const [init, setInit] = useState(true)

  useEffect(() => {
    onAuthStateChanged(firebaseAuthService, (user) => {
      setInit(true)
      if (user) {
        setIsAuthed(true)
        console.log(user)
      } else {
        setIsAuthed(false)
      }
      setInit(false)
    })
  }, [])

  return (
    <RecoilRoot>
      {init ? (
        'loading ...'
      ) : (
        <Routes>
          <Route element={<Layout />}>
            {isAuthed ? <Route path='/' element={<Main />} /> : <Route path='/' element={<Auth />} />}
          </Route>
        </Routes>
      )}
    </RecoilRoot>
  )
}

export default App
