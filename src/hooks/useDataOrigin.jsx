import { useContext } from 'react'
import { DataOriginContext } from '../context/DataOriginContext'

/**
 * Custom hook to access the DataOriginContext
 * Provides the `isMock` and `defineIsMock` function from the context.
 *
 * @returns  {{ isMock: boolean, defineIsMock: (value: boolean) => void }}
 * An object containing the current isMock value and a function to update it.
 */
export function useDataOrigin() {
    return useContext(DataOriginContext)
}
