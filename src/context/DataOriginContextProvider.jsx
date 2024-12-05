import { useState } from 'react'
import { DataOriginContext } from './DataOriginContext'
import PropTypes from 'prop-types'

/**
 * Context provider for managing and sharing the data source service.
 * @param {Object} props
 * @param {React.ReactNode} props.children - React components that will have access to the context.
 * @returns {React.ReactElement} A provider component that supplies the DataOriginContext value to its children.
 */

export function DataOriginContextProvider({ children }) {
    const [isMock, setIsMock] = useState(() => {
        // Retrieve the stored isMock value from localStorage, if available, and set it as the initial state.
        const storedIsMock = localStorage.getItem('isMock')
        const initialValue = JSON.parse(storedIsMock)
        return initialValue || ''
    })

    /**
     * Updates isMock in the context and saves it to localStorage.
     * @param {boolean} value - The new isMock value to store and set
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
