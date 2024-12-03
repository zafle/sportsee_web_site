import { useState } from 'react'
import { AccountContext } from './AccountContext'
import PropTypes from 'prop-types'

/**
 * Provides the context to retrieve user id
 * @param {{ children: JSX.Element}} chidren
 * @returns account context provider
 */
export function AccountContextProvider({ children }) {
    const [userId, setUserId] = useState(() => {
        // getting stored value if exists and set it up as initial value
        const storedId = localStorage.getItem('userId')
        const initialValue = JSON.parse(storedId)
        return initialValue || ''
    })

    /**
     * Save user id in context and in localstorage
     * @param {string} id user id
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
