import { useState } from 'react'
import { AccountContext } from './AccountContext'
import PropTypes from 'prop-types'

/**
 * Context provider for managing and sharing the user account ID.
 * @param {Object} props
 * @param {React.ReactNode} props.children - React components that will have access to the context.
 * @returns {React.ReactElement} A provider component that supplies the `AccountContext` value to its children.
 */

export function AccountContextProvider({ children }) {
    const [userId, setUserId] = useState(() => {
        // Retrieve the stored user ID from localStorage, if available, and set it as the initial state.
        const storedId = localStorage.getItem('userId')
        const initialValue = JSON.parse(storedId)
        return initialValue || ''
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
