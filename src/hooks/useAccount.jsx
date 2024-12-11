import { useContext } from 'react'
import AccountContext from '../context/AccountContext'

/**
 * Custom hook to access the `AccountContext`.
 * Provides the `userId` and `defineUserId` function from the context.
 *
 * @returns {Object.< userId: number | null, defineUserId: Function >} An object containing the current user ID and a function to update it.
 *
 */
function useAccount() {
  return useContext(AccountContext)
}

export default useAccount
