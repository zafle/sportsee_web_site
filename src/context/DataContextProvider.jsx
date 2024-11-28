import { useState } from 'react'
import { DataContext } from './DataContext'
import PropTypes from 'prop-types'

export function DataContextProvider({ children }) {
    const [dataOrigin, setDataOrigin] = useState('mock')
    const defineDataOrigin = (origin) => {
        setDataOrigin(origin)
    }

    return (
        <DataContext.Provider
            value={{
                dataOrigin,
                defineDataOrigin,
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

DataContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
