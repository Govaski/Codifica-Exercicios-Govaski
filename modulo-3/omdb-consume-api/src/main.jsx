import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { SearchListProvider } from './contexts/SearchList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App/>
  </StrictMode>,
)
