import { useContext } from 'react'
import { DataOriginContext } from '../context/DataOriginContext'

/**
 * Hook to use Data Origin Context
 * @returns Dta Origin Context (isMock = true or false, defineIsMock)
 */
export function useDataOrigin() {
    return useContext(DataOriginContext)
}
