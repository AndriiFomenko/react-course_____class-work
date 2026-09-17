import { Outlet } from 'react-router'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <div className="page-container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
