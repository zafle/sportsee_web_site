import { BounceLoader } from 'react-spinners'
import { useAccount } from '../../hooks/useAccount'
import { useGetUserInfos } from '../../services/useDataFactory'

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
        <BounceLoader />
    ) : (
        <header className={'profile-header'}>
            <span>Bonjour </span>
            <span>{userInfos?.firstName}</span>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    )
}
