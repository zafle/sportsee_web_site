import { USER_MAIN_DATA, USER_PERFORMANCE } from '../assets/data/data'
import { USER_ACTIVITY } from '../assets/data/data'
import { USER_AVERAGE_SESSIONS } from '../assets/data/data'
// import PropTypes from 'prop-types'

// ############################################################################

// ##############   Hooks to return datas from mock  ##########################

// ############################################################################

/**
 * Custom hook to return user infos from mock
 * @param {number} userId - The ID of the user to fetch data for.
 * @param {boolean} isMock - Whether to use mock data.
 * @returns {{
 *   isLoading: boolean,
 *   data: {userInfos: {firstName: string, lastName: string, age: number}},
 *   error: boolean
 * }} An object containing the loading state, fetched data, and error state.
 *
 */
export function useMockUserInfos(userId, isMock) {
    if (!isMock) {
        return
    }
    const user = USER_MAIN_DATA.find((user) => user.id === parseInt(userId))
    const userInfos = user.userInfos
    return {
        isLoading: false,
        data: userInfos,
        error: false,
    }
}

/**
 * Custom hook to return daily activity data from mock.
 *
 * @param {number} userId - The ID of the user to fetch data for.
 * @param {boolean} isMock - Whether to use mock data.
 * @returns {{
 *   isLoading: boolean,
 *   data: Array<{ day: string, kilogram: number, calories: number }> | null,
 *   error: boolean
 * }} - An object containing the loading state, fetched daily activity data, and error state.
 */
export function useMockDailyActivity(userId, isMock) {
    if (!isMock) {
        return
    }
    const user = USER_ACTIVITY.find((user) => user.userId === parseInt(userId))
    const dailyActivity = user.sessions
    return {
        isLoading: false,
        data: dailyActivity,
        error: false,
    }
}
//     (useMockDailyActivity.propTypes = {
//         userId: PropTypes.number.isRequired,
//         isMock: PropTypes.bool.isRequired,
//     })

/**
 * Custom hook to return average session data from the API.
 *
 * @param {number} userId - The ID of the user to fetch data for.
 * @param {boolean} isMock - Whether to use mock data.
 * @returns {{
 *   isLoading: boolean,
 *   data: Array<{ day: number, sessionLength: number }> | null,
 *   error: boolean
 * }} - An object containing the loading state, fetched average session data, and error state.
 */
export function useMockAverageSessions(userId, isMock) {
    if (!isMock) {
        return
    }
    const user = USER_AVERAGE_SESSIONS.find(
        (user) => user.userId === parseInt(userId)
    )
    const averageSessions = user.sessions
    return {
        isLoading: false,
        data: averageSessions,
        error: false,
    }
}

/**
 * Custom hook to return performance data from the API.
 *
 * @param {number} userId - The ID of the user to fetch data for.
 * @param {boolean} isMock - Whether to use mock data.
 * @returns {{
 *   isLoading: boolean,
 *   data: Object | null,
 *   error: boolean
 * }} - An object containing the loading state, fetched average session data, and error state.
 */
export function useMockPerformance(userId, isMock) {
    if (!isMock) {
        return
    }
    const performance = USER_PERFORMANCE.find(
        (user) => user.userId === parseInt(userId)
    )
    return {
        isLoading: false,
        data: performance,
        error: false,
    }
}
