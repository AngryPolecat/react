import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
// import { products } from './data/data'
import { About, Cart, Category, Home, NotFound, ProductDetail, Thanks } from './pages'
import { Layout } from './components'

// NEW METHOD
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'old-home', element: <Navigate to={'/'} /> },
      { path: 'cart', element: <Cart /> },
      { path: 'thanks', element: <Thanks /> },
      { path: 'category/:categoryId', element: <Category /> },
      { path: 'product/:productId', element: <ProductDetail /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

// OLD METHOD
// const router = createBrowserRouter([
//   { path: '/', element: <Home /> },
//   { path: 'about', element: <About /> },
//   { path: 'cart', element: <Cart /> },
//   { path: 'categories', element: <Categories /> },
//   { path: 'product', element: <ProductDetail /> },
//   { path: '*', element: <NotFound /> },
// ])

export const App = () => {
  return <RouterProvider router={router} />
}
