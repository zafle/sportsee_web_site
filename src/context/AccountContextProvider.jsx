import { useState } from 'react'
import AccountContext from './AccountContext'
import PropTypes from 'prop-types'

/**
 * Context provider for managing and sharing the user account ID.
 * @param {Object} props
 * @param {React.ReactNode} props.children - React components that will have access to the context.
 * @returns {React.ReactElement} A provider component that supplies the `AccountContext` (userid: number | null, defineUserId: function) value to its children.
 */

function AccountContextProvider({ children }) {
  const [userId, setUserId] = useState(() => {
    // set userId value either from localstorage if available either with default value (null)
    const storedId = localStorage.getItem('userId')
    return storedId !== null ? JSON.parse(storedId) : null
  })

  /**
   *  Updates the userId in the context and saves it to localStorage.
   * @param {number} id - The new user ID to store and set
   */
  const defineUserId = (id) => {
    setUserId(id)
    localStorage.setItem('userId', JSON.stringify(id))
  }

  return (
    <AccountContext.Provider
      value={{
        userId,
        defineUserId,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

AccountContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AccountContextProvider
