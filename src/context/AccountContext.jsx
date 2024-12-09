import { createContext } from 'react'

/**
 * Context to manage user account information.
 * Provides userId and a function to update it.
 *
 * @typedef {Object} AccountContextValue
 * @property {number | null} userId - The current user's ID, or null if not set.
 * @property {Function} defineUserId - Function to set or update userId.
 *
 * @type {React.Context<AccountContextValue>}
 */
export const AccountContext = createContext({
    userId: null,
    defineUserId: () => {},
})
