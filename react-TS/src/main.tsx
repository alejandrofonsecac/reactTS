import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App';
import './mocks/server.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
