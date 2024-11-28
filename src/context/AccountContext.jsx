import { createContext } from 'react'

export const AccountContext = createContext({
    isLogged: false,
    firstName: undefined,
    userId: undefined,
    toggleIsLogged: () => {},
    defineFirstName: () => {},
    defineUserId: () => {},
})
