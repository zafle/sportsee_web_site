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

/**
 * Factory function to return User Main Datas data either from Mock or API.
 * Chooses data source according to isMock boolean value.
 *
 * @param {number} userId logged user ID
 * @param {boolean} isMock indicates which data source has been chosen
 * @returns {Promise}
 * @returns {Promise.resolve<Object.< id: number, userInfos: Object, todayScore: number, keyData: Object >>}
 * @returns {Promise.reject<Error>} AxiosError
 */
export async function getUserMainData(userId, isMock) {
  const userMainData = isMock
    ? getMockUserMainData(userId)
    : await fetchUserMainData(userId)
  return userMainData
}
/**
 * Factory function to return User Daily Activity data either from Mock or API.
 * Chooses data source according to isMock boolean value.
 *
 * @param {number} userId logged user ID
 * @param {boolean} isMock indicates which data source has been chosen
 * @returns {Promise}
 * @returns {Promise.resolve<Object.< userId: number, sessions: Array.<Object> >>}
 * @returns {Promise.reject<Error>} AxiosError
 */
export async function getUserDailyActivity(userId, isMock) {
  const userDailyActivity = isMock
    ? getMockUserDailyActivity(userId)
    : await fetchUserDailyActivity(userId)
  return userDailyActivity
}

/**
 * Factory function to return User Average Sessions data either from Mock or API.
 * Chooses data source according to isMock boolean value.
 *
 * @param {number} userId logged user ID
 * @param {boolean} isMock indicates which data source has been chosen
 * @returns {Promise}
 * @returns {Promise.resolve<Object.< userId: number, sessions: Array.<Object> >>}
 * @returns {Promise.reject<Error>} AxiosError
 */
export async function getUserAverageSessions(userId, isMock) {
  const userAverageSessions = isMock
    ? getMockUserAverageSessions(userId)
    : await fetchUserAverageSessions(userId)
  return userAverageSessions
}

/**
 * Factory function to return User Performance data either from Mock or API.
 * Chooses data source according to isMock boolean value.
 *
 * @param {number} userId logged user ID
 * @param {boolean} isMock indicates which data source has been chosen
 * @returns {Promise}
 * @returns {Promise.resolve<Object.< userId: number, kind: Object, data: Array.<Object> >>}
 * @returns {Promise.reject<Error>} AxiosError
 */
export async function getUserPerformance(userId, isMock) {
  const userPerformance = isMock
    ? getMockUserPerformance(userId)
    : await fetchUserPerformance(userId)
  return userPerformance
}
