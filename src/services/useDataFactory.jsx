import { useDataOrigin } from '../hooks/useDataOrigin'
import { useApiUserInfos } from './useApi'
import { useMockUserInfos } from './useMock'
import PropTypes from 'prop-types'

/**
 * Factory Patterns to return data either from API or mock based on Data origin context
 */

/**
 * Hook to return user infos
 * @param {Number} userId
 * @returns {{
 *   isLoading: boolean,
 *   data: {userInfos: {firstName: string, lastName: string, age: number}},
 *   error: boolean
 * }} An object containing the loading state, fetched data, and error state.
 *
 */
export function useGetUserInfos(userId) {
    const { isMock } = useDataOrigin()
    const apiData = useApiUserInfos(userId, isMock)
    const mockData = useMockUserInfos(userId, isMock)
    return isMock ? mockData : apiData
}

useApiUserInfos.propTypes = {
    userId: PropTypes.number.isRequired,
}
