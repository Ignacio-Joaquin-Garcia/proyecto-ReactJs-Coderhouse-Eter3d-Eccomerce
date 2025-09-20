import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ProductsProvider } from "./context/ProductsContext"
import { DbProvider } from './context/DataBaseContext.jsx'
import { UserContextProvider } from './context/UserDataContext.jsx'

import App from './App.jsx'
import '../css/style.css'
import { ColorsProvider } from './context/ColorsContext.jsx'

const DOMElement = document.getElementById('root')
const VDOMElement = createRoot(DOMElement)

VDOMElement.render(
  <StrictMode>
    <DbProvider>
      <ProductsProvider>
        <UserContextProvider>
          <ColorsProvider>
            <App />
          </ColorsProvider>
        </UserContextProvider>
      </ProductsProvider>
    </DbProvider>
  </StrictMode>,
)
