import React from 'react'
import Home from './pages/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Registration from './pages/Registration'
import Korzina from './pages/Korzina'
import Onas from './pages/Onas'
import Tovar from './pages/Tovar'
import Tovar2 from './pages/Tovar2'
import Tovar3 from './pages/Tovar3'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/registration',
    element: <Registration/>
  },
  {
    path: '/korzina',
    element: <Korzina/>
  },
  {
    path: '/Onas',
    element: <Onas/>
  },
  {
    path: '/Tovar',
    element: <Tovar/>
  },
  {
    path: '/Tovar2',
    element: <Tovar2/>
  },
  {
    path: '/Tovar3',
    element: <Tovar3/>
  },

  
])

const App = () => {
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App
