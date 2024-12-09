import { createContext } from 'react'

/**
 * Context to manage and share data source (either from mock or API) information.
 * Provides isMock and a function to update it.
 *
 * @typedef {Object} DataOriginContexttValue
 * @property {boolean | null} isMock - The current value of isMock, default value is null.
 * @property {Function} defineIsMock - Function to set or update isMock.
 *
 * @type {React.Context<DataOriginContexttValue>}
 */
export const DataOriginContext = createContext({
    isMock: null,
    defineIsMock: () => {},
})
