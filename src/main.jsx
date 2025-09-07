import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ProductsProvider } from "./context/ProductsContext"
import { DbProvider } from './context/dataBaseContext.jsx'

import App from './App.jsx'
import '../css/style.css'

const DOMElement = document.getElementById('root')
const VDOMElement = createRoot(DOMElement)

VDOMElement.render(
  <StrictMode>
    <DbProvider>
      <ProductsProvider>
        <App /> 
      </ProductsProvider>
    </DbProvider>
  </StrictMode>,
)
