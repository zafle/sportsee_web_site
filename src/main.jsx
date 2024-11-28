import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AccountContextProvider } from './context/AccountContextProvider'
import { DataContextProvider } from './context/DataContextProvider'
import Router from './router/router'
import './assets/styles/base/_base.scss'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <DataContextProvider>
            <AccountContextProvider>
                <Router />
            </AccountContextProvider>
        </DataContextProvider>
    </StrictMode>
)
