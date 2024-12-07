import {
    USER_MAIN_DATA,
    USER_PERFORMANCE,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
} from '../assets/data/data'

export function getMockUserMainData(userId) {
    return USER_MAIN_DATA.find((user) => user.id === parseInt(userId))
}
export function getMockUserDailyActivity(userId) {
    return USER_ACTIVITY.find((user) => user.userId === parseInt(userId))
}
export function getMockUserPerformance(userId) {
    return USER_PERFORMANCE.find((user) => user.userId === parseInt(userId))
}
export function getMockUserAverageSessions(userId) {
    return USER_AVERAGE_SESSIONS.find(
        (user) => user.userId === parseInt(userId)
    )
}
