import { Outlet } from 'react-router-dom'

import Logout from 'components/Logout'

const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <footer>
        <Logout />
      </footer>
    </>
  )
}

export default Layout
