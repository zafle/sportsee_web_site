import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useAccount from '../../hooks/useAccount'
import useDataOrigin from '../../hooks/useDataOrigin'

import {
  getUserAverageSessions,
  getUserDailyActivity,
  getUserMainData,
  getUserPerformance,
} from '../../services/dataFactory'

import { dailyActivityData } from '../../utils/dailyActivityData'
import { performanceData } from '../../utils/performanceData'
import { mainDataData } from '../../utils/mainDataData'
import { averageSessionsData } from '../../utils/averageSessionsData'

import BarGraph from '../../components/BarGraph/BarGraph'
import LineGraph from '../../components/LineGraph/LineGraph'
import RadarGraph from '../../components/RadarGraph/RadarGraph'
import RadialBarGraph from '../../components/RadialBarGraph/RadialBarGraph'
import UserKeyData from '../../components/UserKeyData/UserKeyData'
import Loader from '../../components/Loader/Loader'

import './_Profile.scss'

/**
 * Renders a React Component to display Profile Page content :
 * - Page's Header, Daily Activity Chart, Average sessions Chart, Performance Chart
 *
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

  // create isLoading and error States to manage data states
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
        // format data
        // and set state
        try {
          const mainData = await getUserMainData(userId, isMock)
          const formattedMainData = mainDataData(mainData)
          setUserMainData(formattedMainData)

          const dailyActivity = await getUserDailyActivity(userId, isMock)
          const formattedSessions = dailyActivityData(dailyActivity.sessions)
          setUserDailyActivity(formattedSessions)

          const averageSessions = await getUserAverageSessions(userId, isMock)
          const formattedAverageSessions = averageSessionsData(
            averageSessions.sessions,
            dailyActivity.sessions
          )
          setUserAverageSessions(formattedAverageSessions)

          const performance = await getUserPerformance(userId, isMock)
          const formattedPerformance = performanceData(performance)
          setUserPerformance(formattedPerformance)

          // if an error occured, catch it and redirect user to the corresponding type of error
        } catch (err) {
          console.error(err)
          setError(true)

          if (err.status === 404) {
            navigate('/error/404')
          } else if (err.code === 'ERR_NETWORK' || err.status === 503) {
            navigate('/error/503')
          } else {
            navigate('/error')
          }

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

  if (
    userMainData &&
    userDailyActivity &&
    userAverageSessions &&
    userPerformance &&
    error === false
  ) {
    return (
      <div className="profile">
        <header className="profile__header">
          <span>Bonjour </span>
          <span className="profile__header--name">
            {userMainData.firstName}
          </span>
          <p className="profile__header--text">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </header>
        <div className="profile__maincontent">
          <div className="profile__charts">
            <section className="profile__section--daily-activity">
              <BarGraph
                data={userDailyActivity}
                title="Activités quotidiennes"
              />
            </section>
            <div className="profile__chartgroup">
              <section className="profile__section--average-sessions">
                <LineGraph
                  data={userAverageSessions}
                  title="Durée moyenne des sessions"
                />
              </section>
              <section className="profile__section--performance">
                <RadarGraph data={userPerformance} />
              </section>
              <section className="profile__section--score">
                <RadialBarGraph data={userMainData.score} title="Score" />
              </section>
            </div>
          </div>
          <div className="profile__userkeydata">
            {userMainData.keyData.map((element, index) => (
              <UserKeyData
                key={`${element.kind}-${index}`}
                count={element.count}
                kind={element.kind}
                icon={element.icon}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default Profile
