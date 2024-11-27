import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './router/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
