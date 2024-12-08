import DailyActivity from '../../components/DailyActivity/DailyActivity'
import AverageSessions from '../../components/AverageSessions/AverageSessions'
import Performance from '../../components/Performance/Performance'
import { useAccount } from '../../hooks/useAccount'
import { useDataOrigin } from '../../hooks/useDataOrigin'
import { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader'
import {
    getUserAverageSessions,
    getUserDailyActivity,
    getUserMainData,
    getUserPerformance,
} from '../../services/dataFactory'
import './_Profile.scss'

/**
 * Renders a React Component to display Profil Page content :
 * - Page's Header, Daily Activity Chart, Average sessions Chart,
 * @returns {React.ReactElement} Profile page
 */
function Profile() {
    const { userId } = useAccount()
    const { isMock } = useDataOrigin()

    const [userMainData, setUserMainData] = useState(null)
    const [userDailyActivity, setUserDailyActivity] = useState(null)
    const [userPerformance, setUserPerformance] = useState(null)
    const [userAverageSessions, setUserAverageSessions] = useState(null)

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        async function getUserData() {
            setIsLoading(true)
            try {
                const mainData = await getUserMainData(userId, isMock)
                console.log('mainData', mainData)
                setUserMainData(mainData)
                const dailyActivity = await getUserDailyActivity(userId, isMock)
                console.log('dailyActivity', dailyActivity)
                console.log('dailyActivity.sessions', dailyActivity.sessions)
                setUserDailyActivity(dailyActivity.sessions)
                const performance = await getUserPerformance(userId, isMock)
                setUserPerformance(performance)
                const averageSessions = await getUserAverageSessions(
                    userId,
                    isMock
                )
                setUserAverageSessions(averageSessions.sessions)
                console.log('averageSessions', averageSessions)
            } catch (err) {
                console.error(err)
                setError(true)
            } finally {
                setIsLoading(false)
            }
        }
        getUserData()
    }, [userId, isMock])

    if (isLoading) return <Loader />

    if (error) {
        return (
            <span>
                Désolés, nous rencontrons un problème avec le chargement des
                données.
            </span>
        )
    }

    if (
        userMainData &&
        userDailyActivity &&
        userAverageSessions &&
        userPerformance
    ) {
        return (
            <div className="profile">
                <header className="profile__header">
                    <span>Bonjour </span>
                    <span className="profile__header--name">
                        {userMainData.userInfos.firstName}
                    </span>
                    <p className="profile__header--text">
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </p>
                </header>
                <section className="profile__section--daily-activity">
                    <DailyActivity sessions={userDailyActivity} />
                </section>
                <div className="profile__chartgroup">
                    <section className="profile__section--average-sessions">
                        <AverageSessions sessions={userAverageSessions} />
                    </section>
                    <section className="profile__section--performance">
                        <Performance performance={userPerformance} />
                    </section>
                </div>
            </div>
        )
    }
}
export default Profile
