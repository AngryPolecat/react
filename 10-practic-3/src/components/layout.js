import { Outlet } from 'react-router-dom'
import { Footer } from './footer'
import { Header } from './header'

export const Layout = () => {
  return (
    <div>
      <Header />
      <hr />
      <main>
        <Outlet />
      </main>
      <hr />
      <Footer />
    </div>
  )
}
