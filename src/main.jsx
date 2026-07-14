import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouting from './Routing/AppRouting'
import './index.css'
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext'
import ProductContextProvider from './context/ProductContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ProductContextProvider>
        <AppRouting />
        </ProductContextProvider>
      </ThemeContextProvider>
  </React.StrictMode>
)