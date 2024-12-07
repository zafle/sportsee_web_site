import Loader from '../Loader/Loader'
import { useAccount } from '../../hooks/useAccount'
import { useGetUserInfos } from '../../services/useDataFactory'
import './_ProfileHeader.scss'
import { useDataOrigin } from '../../hooks/useDataOrigin'
import { useState } from 'react'

/**
 * Renders the Header for Profile main content page
 * @returns {React.ReactElement}
 */
// export function ProfileHeader() {
//     const { userId } = useAccount()
//     const { isLoading, data, error } = useGetUserInfos(userId)
//     const userInfos = data ? data : null

//     if (error) {
//         return (
//             <span>
//                 Désolés, nous rencontrons un problème avec le chargement des
//                 données.
//             </span>
//         )
//     }

//     return isLoading ? (
//         <Loader />
//     ) : (
//         <header className="profile-header">
//             <span>Bonjour </span>
//             <span className="profile-header__name">{userInfos?.firstName}</span>
//             <p className="profile-header__text">
//                 Félicitation ! Vous avez explosé vos objectifs hier 👏
//             </p>
//         </header>
//     )
// }

export function ProfileHeader({ name }) {
    // const { userId } = useAccount()
    // const {isMock} = useDataOrigin()
    // const [isLoading, setIsLoading] = useState(true)
    // const { isLoading, data, error } = useGetUserInfos(userId)
    // const userInfos = data ? data : null

    // if (error) {
    //     return (
    //         <span>
    //             Désolés, nous rencontrons un problème avec le chargement des
    //             données.
    //         </span>
    //     )
    // }

    // return isLoading ? (
    //     <Loader />
    // ) : (
    return (
        <header className="profile-header">
            <span>Bonjour </span>
            <span className="profile-header__name">{name}</span>
            <p className="profile-header__text">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
        </header>
    )
    // )
}
