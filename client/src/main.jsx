import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import WhatsAppButton from './components/Whatsapp/WhatsAppButton.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <WhatsAppButton />
  </StrictMode>,
)
