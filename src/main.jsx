import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router/Router'
import './assets/styles/base/_base.scss'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router />
    </StrictMode>
)
