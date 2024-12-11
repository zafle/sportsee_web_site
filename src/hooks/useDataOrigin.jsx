import { useContext } from 'react'
import DataOriginContext from '../context/DataOriginContext'

/**
 * Custom hook to access the DataOriginContext
 * Provides the `isMock` and `defineIsMock` function from the context.
 *
 * @returns {Object.< isMock: boolean | null, defineIsMock: Function >} An object containing the current isMock value and a function to update it.
 *
 */
function useDataOrigin() {
  return useContext(DataOriginContext)
}

export default useDataOrigin