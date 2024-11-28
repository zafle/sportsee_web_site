import { useState } from 'react'
import { AccountContext } from './AccountContext'
import PropTypes from 'prop-types'

export function AccountContextProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false)
    const [firstName, setFirstName] = useState(undefined)
    const [userId, setUserId] = useState(undefined)

    const toggleIsLogged = () => {
        setIsLogged(!isLogged)
    }
    const defineFirstName = (name) => {
        setFirstName(name)
    }
    const defineUserId = (id) => {
        setUserId(id)
    }

    return (
        <AccountContext.Provider
            value={{
                isLogged,
                firstName,
                userId,
                toggleIsLogged,
                defineFirstName,
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
