import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { useAccount } from '../../hooks/useAccount'
import { useGetAveragesSessions } from '../../services/useDataFactory'
import Loader from '../Loader/Loader'
import ChartTitle from '../ChartTitle/ChartTitle'
import CustomizedActiveDot from './components/CustomizedActiveDot/CustomizedActiveDot'
import CustomizedCursor from './components/CustomizedCursor/CustomizedCursor'
import CustomizedTooltipContent from './components/CustomizedToolTipContent/CustomizedTooltipContent'
import './_AverageSessions.scss'

/**
 * Create the Average Session Chart developed with Recharts
 * Displays the average session duration for a user, with custom tooltips and a custom gradient line
 * Chart Title is a distinct React component
 * Days labels are added in a span tag
 * @returns {React.ReactElement} A React component displaying the average session chart
 */

function AverageSessions() {
    const { userId } = useAccount()
    const { isLoading, data, error } = useGetAveragesSessions(userId)
    const averageSessions = data ? data : null

    const renderLineChart =
        averageSessions && averageSessions.length > 0 ? (
            <LineChart
                width={258}
                height={263}
                data={averageSessions}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                className="average-sessions__linechart"
            >
                <XAxis dataKey="day" hide={true} />
                <YAxis hide={true} domain={['dataMin - 50', 'dataMax + 50']} />
                <Tooltip
                    cursor={<CustomizedCursor />}
                    content={<CustomizedTooltipContent />}
                    wrapperStyle={{
                        width: 40,
                        height: 25,
                        backgroundColor: 'white',
                    }}
                    itemStyle={{ fontSize: '8px' }}
                />
                <defs>
                    <linearGradient
                        id="gradientLine"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop
                            offset="0%"
                            stopColor="rgba(255, 255, 255, 0.4)"
                        />
                        <stop offset="80%" stopColor="#FFFFFF" />
                    </linearGradient>
                </defs>
                <Line
                    type="natural"
                    dataKey="sessionLength"
                    dot={false}
                    activeDot={<CustomizedActiveDot />}
                    stroke="url(#gradientLine)"
                    strokeWidth={2}
                />
            </LineChart>
        ) : null

    if (error) {
        return (
            <span>
                Désolés, nous rencontrons un problème avec le chargement des
                données.
            </span>
        )
    }

    return (
        <section className="average-sessions">
            {isLoading ? (
                <Loader />
            ) : (
                <div className="average-sessions__chart">
                    <ChartTitle
                        title="Durée moyenne des sessions"
                        classname="average-sessions"
                    />
                    {renderLineChart}
                    <span className="average-sessions__days">LMMJVSD</span>
                </div>
            )}
        </section>
    )
}

export default AverageSessions
