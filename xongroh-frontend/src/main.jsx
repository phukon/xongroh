import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ScrollToTop from './ScrollToTop.jsx'
import { store } from '@/app/store.js'
import Int from './Int.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Int />
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop/>
          <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
