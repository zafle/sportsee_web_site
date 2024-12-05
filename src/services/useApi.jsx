import { useFetch } from './useFetch'
// import PropTypes from 'prop-types'

/**
 * Hooks to define endpoints and use useFetch hook to fetch and return datas from API
 */

// define API URL
const BASE_URL = 'http://localhost:3000'

/**
 * Hook to return user infos from API
 * @param {Number} userId
 * @param {Boolean} isMock
 * @returns {{
 *   isLoading: boolean,
 *   data: {userInfos: {firstName: string, lastName: string, age: number}},
 *   error: boolean
 * }} An object containing the loading state, fetched data, and error state.
 *
 */
export function useApiUserInfos(userId, isMock) {
    const url = `${BASE_URL}/user/${userId}`
    const { isLoading, data, error } = useFetch(url, isMock)
    const userInfos = data ? data.userInfos : null
    return { isLoading, data: userInfos, error }
}

export function useApiDailyActivity(userId, isMock) {
    const url = `${BASE_URL}/user/${userId}/activity`
    const { isLoading, data, error } = useFetch(url, isMock)
    const dailyActivity = data ? data.sessions : null
    return { isLoading, data: dailyActivity, error }
}

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
