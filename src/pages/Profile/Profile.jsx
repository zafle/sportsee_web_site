import { ProfileHeader } from '../../components/ProfileHeader/ProfileHeader'
import DailyActivity from '../../components/DailyActivity/DailyActivity'

/**
 * Component to display Profil Page content
 * @returns {JSX.Element}
 */
function Profile() {
    return (
        <>
            <ProfileHeader />
            <DailyActivity />
        </>
    )
}
export default Profile
