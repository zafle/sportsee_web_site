import {
    USER_MAIN_DATA,
    USER_PERFORMANCE,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
} from '../assets/data/data'

/**
 * Get User Main Datas data from Mock
 * @param {number} userId logged user ID
 * @returns {Object.< id: number, userInfos: Object, todayScore: number, keyData: Object >}
 */
export function getMockUserMainData(userId) {
    return USER_MAIN_DATA.find((user) => user.id === userId)
}

/**
 * Get User Daily Activity data from Mock
 * @param {number} userId logged user ID
 * @returns {Object.< userId: number, sessions: Array.<Object> >}
 */
export function getMockUserDailyActivity(userId) {
    return USER_ACTIVITY.find((user) => user.userId === userId)
}

/**
 * Get User Average Sessions data from Mock
 * @param {number} userId logged user ID
 * @returns {Object.< userId: number, sessions: Array.<Object> >}
 */
export function getMockUserAverageSessions(userId) {
    return USER_AVERAGE_SESSIONS.find((user) => user.userId === userId)
}

/**
 * Get User Performance data from Mock
 * @param {number} userId logged user ID
 * @returns {Object.< userId: number, kind: Object, data: Array.<Object> >}
 */
export function getMockUserPerformance(userId) {
    return USER_PERFORMANCE.find((user) => user.userId === userId)
}
