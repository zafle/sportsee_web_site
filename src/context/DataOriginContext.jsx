import { createContext } from 'react'

/**
 * Create a context for dta source (API or mock)
 */
export const DataOriginContext = createContext({
    isMock: true,
    defineIsMock: () => {},
})
