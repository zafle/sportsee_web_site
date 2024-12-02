import { USER_MAIN_DATA } from '../assets/data/data'

export function useMockUserInfos(userId, isMock) {
    if (!isMock) {
        return
    }
    const user = USER_MAIN_DATA.find((user) => user.id === parseInt(userId))
    const userInfos = user.userInfos

    return {
        isLoading: false,
        data: userInfos,
        error: false,
    }
}
