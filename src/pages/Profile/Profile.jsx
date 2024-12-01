import { useAccount } from '../../hooks/useAccount'
// import { useDataOrigin } from '../../hooks/useDataOrigin'
import { useGetUserInfos } from '../../services/useCallFactory'

function Profile() {
    const { userId } = useAccount()
    // const {isMock} = useDataOrigin()
    const { isLoading, data, error } = useGetUserInfos(userId)
    const userInfos = data ? data : null

    userInfos && console.log('userInfos from profile', userInfos)

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
        userInfos && <div>Bonjour {userInfos.firstName}</div>
    )
}
export default Profile
