import { useDataOrigin } from '../hooks/useDataOrigin'
import {
    useApiAverageSessions,
    useApiDailyActivity,
    useApiUserInfos,
} from './useApi'
import {
    useMockAverageSessions,
    useMockDailyActivity,
    useMockUserInfos,
} from './useMock'
// import PropTypes from 'prop-types'

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

// useGetUserInfos.propTypes = {
//     userId: PropTypes.number.isRequired,
//     isMock: PropTypes.bool.isRequired,
// }

export function useGetDailyActivity(userId) {
    const { isMock } = useDataOrigin()
    const apiData = useApiDailyActivity(userId, isMock)
    const mockData = useMockDailyActivity(userId, isMock)
    return isMock ? mockData : apiData
}

export function useGetAveragesSessions(userId) {
    const { isMock } = useDataOrigin()
    const apiData = useApiAverageSessions(userId, isMock)
    const mockData = useMockAverageSessions(userId, isMock)
    return isMock ? mockData : apiData
}

// useGetUserInfos.propTypes = {
//     userId: PropTypes.number.isRequired,
//     isMock: PropTypes.bool.isRequired,
// }
