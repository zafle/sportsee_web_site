import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import CustomTooltip from './components/CustomTooltip/CustomTooltip'
import { useAccount } from '../../hooks/useAccount'
import { useGetDailyActivity } from '../../services/useDataFactory'
import ChartTitle from '../ChartTitle/ChartTitle'
import Loader from '../Loader/Loader'
import colors from '../../assets/colors/colors'
import './_DailyActivity.scss'

function DailyActivity() {
    const { userId } = useAccount()
    const { isLoading, data, error } = useGetDailyActivity(userId)
    const dailyActivity = data ? data : null

    function formatDate(date) {
        const formatedDate = new Date(date)
        return formatedDate.getDate()
    }
    const sessions = dailyActivity?.map((session) => ({
        ...session,
        day: formatDate(session.day),
    }))

    const renderBarChart = (
        <BarChart
            width={835}
            height={320}
            data={sessions}
            barGap={8}
            className="daily-activity__barchart"
            margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
        >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                dy={16}
                tick={{ fill: colors.lightGrey, fontSize: 14 }}
            />
            <YAxis
                yAxisId="kilogram"
                dataKey="kilogram"
                orientation="right"
                domain={['dataMin - 1', 'dataMax + 1']}
                tickCount={4}
                axisLine={false}
                tickLine={false}
                dx={24}
                tick={{ fill: colors.lightGrey, fontSize: 14 }}
            />
            <YAxis
                yAxisId="calories"
                domain={['dataMin - 100', 'dataMax + 10']}
                hide={true}
            />
            <Tooltip
                offset={30}
                content={<CustomTooltip />}
                cursor={{ fill: colors.transparentGrey }}
            />
            <Legend
                iconType="circle"
                iconSize={8}
                align="right"
                verticalAlign="top"
                formatter={(value) => (
                    <span className="daily-activity__barchart--legend">
                        {value}
                    </span>
                )}
                wrapperStyle={{
                    paddingBottom: '48px',
                    marginRight: '-30px',
                }}
            />
            <Bar
                name={'Poids (kg)'}
                dataKey="kilogram"
                fill={colors.secondaryContrast}
                barSize={7}
                yAxisId="kilogram"
                radius={[3, 3, 0, 0]}
            />
            <Bar
                name={'Calories brûlées (kCal)'}
                dataKey="calories"
                fill={colors.primaryContrast}
                barSize={7}
                yAxisId="calories"
                radius={[3, 3, 0, 0]}
            />
        </BarChart>
    )

    if (error) {
        return (
            <span>
                Désolés, nous rencontrons un problème avec le chargement des
                données.
            </span>
        )
    }

    return (
        <section className="daily-activity">
            {isLoading ? (
                <Loader />
            ) : (
                <div className="daily-activity__chart">
                    <ChartTitle
                        title="Activité quotidienne"
                        classname="activity"
                    />
                    {renderBarChart}
                </div>
            )}
        </section>
    )
}
export default DailyActivity
