import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  HashRouter,
  Route,
  Routes
 
} from "react-router-dom"
import { Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './components/HomePage.jsx'
import Manual from './components/Manual.jsx'
import Category from './components/Category.jsx'
import MainPage from './components/MainPage.jsx'
import { useContext , useState } from 'react'
import { GameContext , MyProvider } from './components/GameContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
      <HashRouter>
      <Routes>
  <Route path="/" element={<Navigate replace to="/hangman" />} />
  <Route path="/hangman" element={<HomePage />} />
  <Route path="/hangman/manual/:manualId" element={<Manual />} />
  <Route path="/hangman/category/:categoryId" element={<Category />} />
  <Route path="/hangman/mainpage/:mainpageId" element={<MainPage />} />
      </Routes>

      </HashRouter>
    </MyProvider>
  </React.StrictMode>,
)

