import { createContext } from 'react'
/**
 * Create a context for user id
 */
export const AccountContext = createContext({
    userId: undefined,
    defineUserId: () => {},
})
