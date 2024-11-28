import { useFetch } from '../../hooks/useFetch'

function Profile() {
    const { isLoading, data, error } = useFetch('user')
    const userInfos = data ? data.userInfos : null

    if (error) {
        return (
            <span>
                Désolés, nous rencontrons un problème avec le chargement des
                données.
            </span>
        )
    }

    if (!isLoading) {
        console.log(userInfos)
        console.log(userInfos.firstName)
    }

    return isLoading ? (
        <div>Loading...</div>
    ) : (
        <div>{`Bonjour ${userInfos.firstName}`}</div>
    )
}
export default Profile
