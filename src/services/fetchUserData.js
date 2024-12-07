import axios from 'axios'

// define API URL
const BASE_URL = 'http://localhost:3000'

export async function fetchUserMainData(userId) {
    const response = await axios.get(`${BASE_URL}/user/${userId}`)
    return response.data
}

export async function fetchUserDailyActivity(userId) {
    const response = await axios.get(`${BASE_URL}/user/${userId}/activity`)

    return response.data
}

export async function fetchUserAverageSessions(userId) {
    const response = await axios.get(
        `${BASE_URL}/user/${userId}/average-sessions`
    )
    return response.data
}

export async function fetchUserPerformance(userId) {
    const response = await axios.get(`${BASE_URL}/user/${userId}/performance`)
    return response.data
}
