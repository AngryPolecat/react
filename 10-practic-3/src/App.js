import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Layout } from './components'
import { Home, About, Products, Product, Login, Search, NotFound } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products /> },
      { path: 'product/:productId', element: <Product /> },
      { path: 'login', element: <Login /> },
      { path: 'search', element: <Search /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

//Rus
// 01. Настройте router согласно этой структуре
// src/
// ├── components/
// │   ├── Header.jsx            // Навигационное меню с Link/NavLink
// │   ├── Footer.jsx            // Футер страницы
// ├── pages/
// │   ├── HomePage.jsx          // Главная страница
// │   ├── AboutPage.jsx         // Статическая страница "О нас"
// │   ├── ProductsPage.jsx      // Страница со списком продуктов
// │   ├── ProductDetails.jsx    // Страница с подробной информацией о продукте
// │   ├── SearchPage.jsx        // Страница поиска с использованием query string
// │   ├── LoginPage.jsx         // Пример редиректа при логине
// │   └── NotFoundPage.jsx      // Страница 404
// ├── App.jsx                   // Корневой компонент с <Router> и маршрутизацией

// 02. Создайте ссылки на страницы в компоненте Header и разместите его на всех страницах любым удобным способом.
// 03. Настройте путь на страницу ProductDetails динамически. Отобразите на странице параметр из пути текущей страницы.
// 04. Посмотрите задание по query string в компоненте searchPage.jsx.
// 05. В компоненте LoginPage настройте кнопку "Log in" с использованием <Link></Link>, чтобы она перенаправляла пользователя на главную страницу и передавала объект state {login: "You are logged in"}.
// 06. В компоненте LoginPage программно настройте кнопку "Forgot login", чтобы она перенаправляла пользователя на главную страницу и передавала объект state {login: "You are not logged in"}.
// 07. На главной странице отобразите значение state login внутри тега <p></p>.
// 08. Настройте редирект со всех несуществующих страниц на главную страницу.
