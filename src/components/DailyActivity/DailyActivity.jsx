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
import ChartTitle from '../ChartTitle/ChartTitle'
import colors from '../../assets/colors/colors'
import './_DailyActivity.scss'
import PropTypes from 'prop-types'

/**
 * Creates the Daily Activity Chart developed with Recharts
 * Displays the daily weight and calories for a user
 * Uses custom tooltips
 * Chart Title is a distinct React component
 * @param {Object} props
 * @param {Object[]} sessions
 * @param {string} sessions[].day the day date 'D'
 * @param {number} sessions[].kilogram
 * @param {number} sessions[].calories
 * @returns {React.ReactElement} A React component displaying the Daily Activity Chart
 */

function DailyActivity({ sessions }) {
  // Construct the Daily Activity Chart with Recharts
  const renderBarChart = (
    <BarChart
      width={835}
      height={320}
      data={sessions}
      barGap={8}
      className="daily-activity__chart__barchart"
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
        yAxisId="kg"
        dataKey="kg"
        orientation="right"
        domain={['dataMin - 1', 'dataMax + 1']}
        tickCount={4}
        axisLine={false}
        tickLine={false}
        dx={24}
        tick={{ fill: colors.lightGrey, fontSize: 14 }}
      />
      <YAxis
        yAxisId="Kcal"
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
          <span className="daily-activity__chart__barchart--legend">
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
        dataKey="kg"
        fill={colors.secondaryContrast}
        barSize={7}
        yAxisId="kg"
        radius={[3, 3, 0, 0]}
      />
      <Bar
        name={'Calories brûlées (kCal)'}
        dataKey="Kcal"
        fill={colors.primaryContrast}
        barSize={7}
        yAxisId="Kcal"
        radius={[3, 3, 0, 0]}
      />
    </BarChart>
  )

  return (
    <div className="daily-activity__chart">
      <ChartTitle title="Activité quotidienne" classname="activity" />
      {renderBarChart}
    </div>
  )
}
export default DailyActivity

DailyActivity.propTypes = {
  sessions: PropTypes.array.isRequired,
}
