import { useAccount } from '../../hooks/useAccount'
import { useGetUserInfos } from '../../services/useDataFactory'

/**
 * Component to display Profil Page content
 * @returns {JSX.Element}
 */
function Profile() {
    const { userId } = useAccount()
    const { isLoading, data, error } = useGetUserInfos(userId)
    const userInfos = data ? data : null

    if (error) {
        return (
            <span>
                Désolés, nous rencontrons un problème avec le chargement des
                données.
            </span>
        )
    }

    return isLoading ? (
        <div>chargement...</div>
    ) : (
        <div>Bonjour {userInfos?.firstName}</div>
    )
}
export default Profile
