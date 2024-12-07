import {
    fetchUserAverageSessions,
    fetchUserDailyActivity,
    fetchUserMainData,
    fetchUserPerformance,
} from './fetchuserData'
import {
    getMockUserAverageSessions,
    getMockUserDailyActivity,
    getMockUserMainData,
    getMockUserPerformance,
} from './getMockUserData'

export async function getUserMainData(userId, isMock) {
    const userMainData = isMock
        ? getMockUserMainData(userId)
        : await fetchUserMainData(userId)
    return userMainData
}
export async function getUserDailyActivity(userId, isMock) {
    const userDailyActivity = isMock
        ? getMockUserDailyActivity(userId)
        : await fetchUserDailyActivity(userId)
    return userDailyActivity
}
export async function getUserPerformance(userId, isMock) {
    const userPerformance = isMock
        ? getMockUserPerformance(userId)
        : await fetchUserPerformance(userId)
    return userPerformance
}
export async function getUserAverageSessions(userId, isMock) {
    const userAverageSessions = isMock
        ? getMockUserAverageSessions(userId)
        : await fetchUserAverageSessions(userId)
    return userAverageSessions
}
