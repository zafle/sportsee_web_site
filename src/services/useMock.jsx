import { USER_MAIN_DATA } from '../assets/data/data'
import PropTypes from 'prop-types'

/**
 * Hooks to return datas from mock
 */

/**
 * Hook to return user infos from mock
 * @param {Number} userId
 * @param {Boolean} isMock
 * @returns {{
 *   isLoading: boolean,
 *   data: {userInfos: {firstName: string, lastName: string, age: number}},
 *   error: boolean
 * }} An object containing the loading state, fetched data, and error state.
 *
 */
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

useMockUserInfos.propTypes = {
    userId: PropTypes.number.isRequired,
    isMock: PropTypes.bool.isRequired,
}
