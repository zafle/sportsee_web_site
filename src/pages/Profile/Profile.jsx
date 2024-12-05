import { ProfileHeader } from '../../components/ProfileHeader/ProfileHeader'
import DailyActivity from '../../components/DailyActivity/DailyActivity'
import AverageSessions from '../../components/AverageSessions/AverageSessions'

/**
 * Component to display Profil Page content
 * @returns {JSX.Element}
 */
function Profile() {
    return (
        <>
            <ProfileHeader />
            <DailyActivity />
            <AverageSessions />
        </>
    )
}
export default Profile
