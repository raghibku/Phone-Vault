import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './components/home/Home.jsx'
import Cart from './components/cart/Cart.jsx'
import PhoneDetails from './components/Details/PhoneDetails.jsx'
import OrderedProducts from './components/cart/OrderedProducts.jsx'
import Search from './components/Search/Search.jsx'
import Banner from './components/home/Banner.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element : <Layout/>,
    children: [
      {
        path:'/',
        element: <Home/>,
        children:[
          {
            path:'/',
            element:<Banner/>
          },
          {
            path: '/search',
            element:<Search/>
          }
        ]
      },
      {
        path:'/cart',
        element: <Cart/>
      },
      {
        path:'/ordered-products',
        element: <OrderedProducts/>
      },
      {
        path: '/phone-details/:id',
        element: <PhoneDetails/>
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
