import { useDataOrigin } from '../hooks/useDataOrigin'
import { useApiUserInfos } from './callApi'
import { USER_MAIN_DATA } from '../assets/data/data'

export function useGetUserInfos(userId) {
    const { isMock } = useDataOrigin()
    console.log('isMock', isMock)

    const apiData = useApiUserInfos(userId)
    const mockData = { isLoading: false, data: USER_MAIN_DATA, error: false }
    return isMock ? mockData : apiData
}
