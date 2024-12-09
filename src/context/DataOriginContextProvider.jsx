import { useState } from 'react'
import { DataOriginContext } from './DataOriginContext'
import PropTypes from 'prop-types'

/**
 * Context provider for managing and sharing the data source context.
 * @param {Object} props
 * @param {React.ReactNode} props.children - React components that will have access to the context.
 * @returns {React.ReactElement} A provider component that supplies the DataOriginContext (isMock: boolean | null, defineIsMock: function) value to its children.
 */

export function DataOriginContextProvider({ children }) {
    // set isMock value either from localstorage if available either with default value (null)
    const [isMock, setIsMock] = useState(() => {
        const storedIsMock = localStorage.getItem('isMock')
        return storedIsMock !== null ? JSON.parse(storedIsMock) : null
    })

    /**
     * Function to update isMock value in the context and saves it to localStorage.
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
