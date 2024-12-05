import { ProfileHeader } from '../../components/ProfileHeader/ProfileHeader'
import DailyActivity from '../../components/DailyActivity/DailyActivity'
import AverageSessions from '../../components/AverageSessions/AverageSessions'

/**
 * Renders a React Component to display Profil Page content :
 * - Page's Header, Daily Activity Chart, Average sessions Chart,
 * @returns {React.ReactElement} Profile page
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
