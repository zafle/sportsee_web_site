import axios from 'axios'

// define API URL
const BASE_URL = 'http://localhost:3000'

/**
 *Fetches User Main Datas data with Axios
 * @param {number} userId logged user ID
 * @returns {Promise}
 * @returns {Promise.resolve<Object.< id: number, userInfos: Object, todayScore: number, keyData: Object >>}
 * @returns {Promise.reject<Error>} AxiosError
 */
export async function fetchUserMainData(userId) {
  const response = await axios.get(`${BASE_URL}/user/${userId}`)
  return response.data.data
}

/**
 *Fetches User Daily Activity data with Axios
 * @param {number} userId logged user ID
 * @returns {Promise}
 * @returns {Promise.resolve<Object.< userId: number, sessions: Array.<Object> >>}
 * @returns {Promise.reject<Error>} AxiosError
 */
export async function fetchUserDailyActivity(userId) {
  const response = await axios.get(`${BASE_URL}/user/${userId}/activity`)
  return response.data.data
}

/**
 *Fetches User Average Sessions data with Axios
 * @param {number} userId logged user ID
 * @returns {Promise}
 * @returns {Promise.resolve<Object.< userId: number, sessions: Array.<Object> >>}
 * @returns {Promise.reject<Error>} AxiosError
 */
export async function fetchUserAverageSessions(userId) {
  const response = await axios.get(
    `${BASE_URL}/user/${userId}/average-sessions`
  )
  return response.data.data
}

/**
 *Fetches User Performance data with Axios
 * @param {number} userId logged user ID
 * @returns {Promise}
 * @returns {Promise.resolve<Object.< userId: number, kind: Object, data: Array.<Object> >>}
 * @returns {Promise.reject<Error>} AxiosError
 */
export async function fetchUserPerformance(userId) {
  const response = await axios.get(`${BASE_URL}/user/${userId}/performance`)
  return response.data.data
}
