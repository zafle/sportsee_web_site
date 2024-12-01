import axios from 'axios'
import { useApi } from './useApi'

const BASE_URL = 'http://localhost:3000'

export function useApiUserInfos(userId) {
    const url = `${BASE_URL}/user/${userId}`
    const { isLoading, data, error } = useApi(url)
    const userInfos = data ? data.userInfos : null
    console.log('userInfos', userInfos)
    return { isLoading, data: userInfos, error }
}

export function getUserActivity(userId) {
    return axios.get(`http://localhost:3000/user/${userId}/activity`)
}
