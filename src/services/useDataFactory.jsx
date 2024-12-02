import { useDataOrigin } from '../hooks/useDataOrigin'
import { useApiUserInfos } from './useApi'
import { useMockUserInfos } from './useMock'

export function useGetUserInfos(userId) {
    const { isMock } = useDataOrigin()
    const apiData = useApiUserInfos(userId, isMock)
    const mockData = useMockUserInfos(userId, isMock)
    return isMock ? mockData : apiData
}
