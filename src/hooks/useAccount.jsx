import { useContext } from 'react'
import { AccountContext } from '../context/AccountContext'

export function useAccount() {
    return useContext(AccountContext)
}
