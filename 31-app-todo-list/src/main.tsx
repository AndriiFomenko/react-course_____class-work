import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import ContextProvider from './components/ContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)
