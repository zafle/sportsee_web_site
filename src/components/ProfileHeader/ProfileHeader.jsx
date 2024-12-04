import Loader from '../Loader/Loader'
import { useAccount } from '../../hooks/useAccount'
import { useGetUserInfos } from '../../services/useDataFactory'
import './_ProfileHeader.scss'

export function ProfileHeader() {
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
        <Loader />
    ) : (
        <header className="profile-header">
            <span>Bonjour </span>
            <span className="profile-header__name">{userInfos?.firstName}</span>
            <p className="profile-header__text">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
        </header>
    )
}
