import { Outlet } from 'react-router-dom'
import './layout.css'
import { Header, Footer } from '../../components'

export const Layout = () => {
  return (
    <>
      <Header />
      <hr />
      <main>
        <Outlet />
      </main>
      <hr />
      <Footer />
    </>
  )
}
