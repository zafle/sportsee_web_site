import { useContext } from 'react'
import { DataOriginContext } from '../context/DataOriginContext'

export function useDataOrigin() {
    return useContext(DataOriginContext)
}
