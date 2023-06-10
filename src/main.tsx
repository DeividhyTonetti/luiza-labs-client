import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomeContainer } from './pages/home/HomeContainer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HomeContainer />
  </React.StrictMode>,
)
