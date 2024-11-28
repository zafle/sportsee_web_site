import { createContext } from 'react'

export const DataOriginContext = createContext({
    isMock: true,
    defineIsMock: () => {},
})
