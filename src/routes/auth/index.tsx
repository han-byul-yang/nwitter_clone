import { FormEvent, useEffect, useState } from 'react'
import { firebaseAuthService } from 'firebaseContainer'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Auth = () => {
  const [newAccount, setNewAccount] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    if (name === 'email') setEmail(value)
    if (name === 'password') setPassword(value)
  }

  const handleLoginSumbit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newAccount) await createUserWithEmailAndPassword(firebaseAuthService, email, password)
    else await signInWithEmailAndPassword(firebaseAuthService, email, password)
  }

  const handleNewAccountClick = () => {
    setNewAccount((prevState) => !prevState)
  }

  return (
    <>
      <form onSubmit={handleLoginSumbit}>
        <input type='email' name='email' placeholder='email' value={email} onChange={handleLoginChange} />
        <input type='password' name='password' placeholder='password' value={password} onChange={handleLoginChange} />
        <input type='submit' />
      </form>
      <button type='button' onClick={handleNewAccountClick}>
        {newAccount ? 'sign up' : 'sign in'}
      </button>
    </>
  )
}

export default Auth
