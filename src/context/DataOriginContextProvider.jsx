import { useState } from 'react'
import { DataOriginContext } from './DataOriginContext'
import PropTypes from 'prop-types'

/**
 * Provides the context to retrieve data source origin (API or mock)
 * @param {{ children: JSX.Element}} chidren
 * @returns data origin context provider
 */
export function DataOriginContextProvider({ children }) {
    const [isMock, setIsMock] = useState(() => {
        // getting stored value if exists and set it up as initial value
        const storedIsMock = localStorage.getItem('isMock')
        const initialValue = JSON.parse(storedIsMock)
        return initialValue || ''
    })

    /**
     * Save data origin in context and in localstorage
     * @param {string} id user id
     */
    const defineIsMock = (value) => {
        setIsMock(value)
        localStorage.setItem('isMock', JSON.stringify(value))
    }

    return (
        <DataOriginContext.Provider
            value={{
                isMock,
                defineIsMock,
            }}
        >
            {children}
        </DataOriginContext.Provider>
    )
}

DataOriginContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
