import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../css/style.css'

const DOMElement = document.getElementById('root')
const VDOMElement = createRoot(DOMElement)

VDOMElement.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
