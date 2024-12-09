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
import { useNavigate } from 'react-router-dom'
import { dailyActivityData } from '../../models/dailyActivityData'
import { performanceData } from '../../models/performanceData'

/**
 * Renders a React Component to display Profile Page content :
 * - Page's Header, Daily Activity Chart, Average sessions Chart, Performance Chart
 * @returns {React.ReactElement} Profile page
 */
function Profile() {
  // get user Id and data source from contexts
  const { userId } = useAccount()
  const { isMock } = useDataOrigin()

  //  create states for datas
  const [userMainData, setUserMainData] = useState(null)
  const [userDailyActivity, setUserDailyActivity] = useState(null)
  const [userPerformance, setUserPerformance] = useState(null)
  const [userAverageSessions, setUserAverageSessions] = useState(null)

  // creat isLoading and error data to manage datas states
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  // get user data if user is logged, else redirect to homepage authentification form
  useEffect(() => {
    if (userId !== null || isMock !== null) {
      // async function to get data from data Factory
      async function getUserData() {
        // as long as datas are not stored into states, isLoading is true
        setIsLoading(true)

        // get data from Data Factory
        // format data if needed
        // and set state
        try {
          const mainData = await getUserMainData(userId, isMock)
          setUserMainData(mainData)

          const dailyActivity = await getUserDailyActivity(userId, isMock)
          const formattedSessions = dailyActivityData(dailyActivity.sessions)
          setUserDailyActivity(formattedSessions)

          const averageSessions = await getUserAverageSessions(userId, isMock)
          setUserAverageSessions(averageSessions.sessions)

          const performance = await getUserPerformance(userId, isMock)
          const formattedPerformance = performanceData(performance)
          setUserPerformance(formattedPerformance)

          // if an error occured, catch it and set Error state to true
        } catch (err) {
          console.log(err.toJSON())
          setError(true)

          // finally set isLoading state to false
        } finally {
          setIsLoading(false)
        }
      }
      getUserData()
    } else {
      // if user is not logged, navigate to home page
      navigate('/', { replace: true })
    }
  }, [userId, isMock, navigate])

  if (isLoading) return <Loader />

  if (error) {
    return (
      <span>
        Désolés, nous rencontrons un problème avec le chargement des données.
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
