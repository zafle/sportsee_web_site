import { createContext } from 'react'

/**
 * Context to manage user account information.
 * Provides userId and a function to update it.
 *
 * @typedef {Object} AccountContextValue
 * @property {number | undefined} userId - The current user's ID, or undefined if not set.
 * @property {Function} defineUserId - Function to set or update userId.
 *
 * @type {React.Context<AccountContextValue>}
 */
export const AccountContext = createContext({
    userId: undefined,
    defineUserId: () => {},
})
