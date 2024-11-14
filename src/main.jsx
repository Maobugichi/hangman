import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import HomePage from './components/HomePage.jsx'
import Manual from './components/Manual.jsx'
import Category from './components/Category.jsx'
import MainPage from './components/MainPage.jsx'
import { useContext , useState } from 'react'
import { GameContext , MyProvider } from './components/GameContext.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage/>
  },
  {
   path:"manual/:manualId",
   element: <Manual/>
  },
  {
    path:"category/:categoryId",
    element: <Category/>
  },
  {
    path:"mainpage/:mainpageId",
    element: <MainPage/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
     <RouterProvider router={router} />
    </MyProvider>
  </React.StrictMode>,
)