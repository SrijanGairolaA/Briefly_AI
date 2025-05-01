import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import App from './App.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Subscription from './pages/Subscription.jsx'
import Login from './pages/Login.jsx'
import Layout from './Layout.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout/>}>
     <Route index element={<App/>}/>
     <Route path='aboutus' element={<AboutUs/>}/>
    </Route>
    <Route path='subscription' element={<Subscription/>}/>
    <Route path='login' element={<Login/>}/>
    </>
  )
)





createRoot(document.getElementById('root')).render(

  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>

)
