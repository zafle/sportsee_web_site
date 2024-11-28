import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AccountContextProvider } from './context/AccountContextProvider'
import { DataOriginContextProvider } from './context/DataOriginContextProvider'
import Router from './router/router'
import './assets/styles/base/_base.scss'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <DataOriginContextProvider>
            <AccountContextProvider>
                <Router />
            </AccountContextProvider>
        </DataOriginContextProvider>
    </StrictMode>
)
