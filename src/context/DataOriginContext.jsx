import { createContext } from 'react'

/**
 * Context to manage source data information (either from mock or API).
 * Provides isMock and a function to update it.
 *
 * @typedef {Object} DataOriginContexttValue
 * @property {boolean} isMock - The current value of isMock, default value is true.
 * @property {Function} defineUserId - Function to set or update isMock.
 *
 * @type {React.Context<DataOriginContexttValue>}
 */
export const DataOriginContext = createContext({
    isMock: true,
    defineIsMock: () => {},
})
