import { useContext } from 'react'
import { AccountContext } from '../context/AccountContext'

/**
 * Hook to use Account Context
 * @returns Account Context (userId, defineUserId)
 */
export function useAccount() {
    return useContext(AccountContext)
}
