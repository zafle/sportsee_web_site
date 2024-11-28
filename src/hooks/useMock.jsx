import { users } from '../assets/mocks/users'
import { activity } from '../assets/mocks/activity'
import { averageSessions } from '../assets/mocks/average-sessions'
import { performance } from '../assets/mocks/performance'
import { useAccount } from './useAccount'

export function useMock(query) {
    const { userId } = useAccount()

    switch (query) {
        case 'user':
            return users.filter((user) => user.id === userId)
        case 'activity':
            return activity
        case 'sessions':
            return averageSessions
        case 'performance':
            return performance

        default:
            return 'nothing found'
    }
}
