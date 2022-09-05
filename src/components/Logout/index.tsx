import { firebaseAuthService } from 'firebaseContainer'

const Logout = () => {
  const handleSignoutClick = () => {
    firebaseAuthService.signOut()
  }

  return (
    <button type='button' onClick={handleSignoutClick}>
      sign out
    </button>
  )
}

export default Logout
