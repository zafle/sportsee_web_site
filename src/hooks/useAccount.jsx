import { useContext } from 'react'
import { AccountContext } from '../context/AccountContext'

/**
 * Custom hook to access the `AccountContext`.
 * Provides the `userId` and `defineUserId` function from the context.
 *
 * @returns {{ userId: number, isLogged: boolean, defineUserId: (id: number), setIsLogged: (value: boolean) }}
 * An object containing the current user ID and a function to update it.
 */
export function useAccount() {
    return useContext(AccountContext)
}
