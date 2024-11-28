import { useState } from 'react'
import { DataOriginContext } from './DataOriginContext'
import PropTypes from 'prop-types'

export function DataOriginContextProvider({ children }) {
    const [isMock, setIsMock] = useState(true)
    const defineIsMock = (value) => {
        setIsMock(value)
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
