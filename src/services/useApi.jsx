import axios from 'axios'
import { useFetch } from './useFetch'

const BASE_URL = 'http://localhost:3000'

export function useApiUserInfos(userId, isMock) {
    const url = `${BASE_URL}/user/${userId}`
    const { isLoading, data, error } = useFetch(url, isMock)
    const userInfos = data ? data.userInfos : null
    return { isLoading, data: userInfos, error }
}

export function getUserActivity(userId) {
    return axios.get(`http://localhost:3000/user/${userId}/activity`)
}
