// import PropTypes from 'prop-types'
import { useFetch } from './useFetch'

// define API URL
const BASE_URL = 'http://localhost:3000'

/**
 * Custom hook to fetch and return user information data from the API.
 *
 * @param {number} userId - The ID of the user to fetch data for.
 * @param {boolean} isMock - Whether to use mock data.
 * @returns {{
 *   isLoading: boolean,
 *   data: { userInfos: { firstName: string, lastName: string, age: number } } | null,
 *   error: boolean
 * }} - An object containing the loading state, fetched user information, and error state.
 */
export function useApiUserInfos(userId, isMock) {
    const url = `${BASE_URL}/user/${userId}`
    const { isLoading, data, error } = useFetch(url, isMock)
    const userInfos = data ? data.userInfos : null
    return { isLoading, data: userInfos, error }
}

/**
 * Custom hook to fetch and return daily activity data from the API.
 *
 * @param {number} userId - The ID of the user to fetch data for.
 * @param {boolean} isMock - Whether to use mock data.
 * @returns {{
 *   isLoading: boolean,
 *   data: Array<{ day: string, kilogram: number, calories: number }> | null,
 *   error: boolean
 * }} - An object containing the loading state, fetched daily activity data, and error state.
 */
export function useApiDailyActivity(userId, isMock) {
    const url = `${BASE_URL}/user/${userId}/activity`
    const { isLoading, data, error } = useFetch(url, isMock)
    const dailyActivity = data ? data.sessions : null
    return { isLoading, data: dailyActivity, error }
}

/**
 * Custom hook to fetch and return average session data from the API.
 *
 * @param {number} userId - The ID of the user to fetch data for.
 * @param {boolean} isMock - Whether to use mock data.
 * @returns {{
 *   isLoading: boolean,
 *   data: Array<{ day: number, sessionLength: number }> | null,
 *   error: boolean
 * }} - An object containing the loading state, fetched average session data, and error state.
 */
export function useApiAverageSessions(userId, isMock) {
    const url = `${BASE_URL}/user/${userId}/average-sessions`
    const { isLoading, data, error } = useFetch(url, isMock)
    const averageSessions = data ? data.sessions : null
    return { isLoading, data: averageSessions, error }
}

// useApiUserInfos.propTypes = {
//     userId: PropTypes.number.isRequired,
//     isMock: PropTypes.bool.isRequired,
// }
