import { useDataOrigin } from '../hooks/useDataOrigin'
import {
    useApiAverageSessions,
    useApiDailyActivity,
    useApiPerformance,
    useApiUserInfos,
} from './useApi'
import {
    useMockAverageSessions,
    useMockDailyActivity,
    useMockPerformance,
    useMockUserInfos,
} from './useMock'
// import PropTypes from 'prop-types'

/**
 * Custom hook factory pattern to return user infos data either from API or mock based on Data origin context
 * @param {number} userId - The ID of the user to fetch data for.
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

/**
 * Custom hook factory pattern to return daily activity user data either from API or mock based on Data origin context
 *
 * @param {number} userId - The ID of the user to fetch data for.
 * @returns {{
 *   isLoading: boolean,
 *   data: Array<{ day: string, kilogram: number, calories: number }>
 *   error: boolean
 * }} - An object containing the loading state, fetched daily activity data, and error state.
 */
export function useGetDailyActivity(userId) {
    const { isMock } = useDataOrigin()
    const apiData = useApiDailyActivity(userId, isMock)
    const mockData = useMockDailyActivity(userId, isMock)
    return isMock ? mockData : apiData
}

/**
 * Custom hook factory pattern to return average session user data either from API or mock based on Data origin context
 *
 * @param {number} userId - The ID of the user to fetch data for.
 * @returns {{
 *   isLoading: boolean,
 *   data: Array<{ day: number, sessionLength: number }>
 *   error: boolean
 * }} - An object containing the loading state, fetched average session data, and error state.
 */
export function useGetAveragesSessions(userId) {
    const { isMock } = useDataOrigin()
    const apiData = useApiAverageSessions(userId, isMock)
    const mockData = useMockAverageSessions(userId, isMock)
    return isMock ? mockData : apiData
}

/**
 * Custom hook factory pattern to return performance user data either from API or mock based on Data origin context
 *
 * @param {number} userId - The ID of the user to fetch data for.
 * @returns {{
 *   isLoading: boolean,
 *   data: Object
 *   error: boolean
 * }} - An object containing the loading state, fetched performance data, and error state.
 */
export function useGetPerformance(userId) {
    const { isMock } = useDataOrigin()
    const apiData = useApiPerformance(userId, isMock)
    const mockData = useMockPerformance(userId, isMock)
    return isMock ? mockData : apiData
}

// useGetUserInfos.propTypes = {
//     userId: PropTypes.number.isRequired,
//     isMock: PropTypes.bool.isRequired,
// }

// useGetUserInfos.propTypes = {
//     userId: PropTypes.number.isRequired,
//     isMock: PropTypes.bool.isRequired,
// }
