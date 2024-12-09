import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from 'recharts'
import colors from '../../assets/colors/colors'
import PropTypes from 'prop-types'
import './_Performance.scss'

/**
 * Creates the Performance Chart developed with Recharts
 * Displays the performance for a user
 * @param {Object} props
 * @param {Object[]} performance
 * @param {number} performance[].value value for specified category (performance.data.kind)
 * @param {number} performance[].kind category's ID
 * @returns {React.ReactElement} A React component displaying the Performance Chart
 */
function Performance({ performance }) {
  // construct Performance Chart using Recharts
  const renderRadarChart = (
    <RadarChart
      outerRadius={88}
      width={258}
      height={263}
      startAngle={210}
      endAngle={570}
      data={performance}
      className="performance__chart__barchart"
    >
      <PolarGrid
        stroke="white"
        polarRadius={[10, 20, 42, 65, 88]}
        radialLines={false}
      />
      <PolarAngleAxis
        dataKey={'kind'}
        tickLine={false}
        axisLine={false}
        tick={{
          fill: '#ffffff',
          fontSize: 12,
          fontWeight: 400,
          marginTop: 5,
        }}
        className="performance__chart__barchart--ticks"
      />
      <PolarRadiusAxis domain={[0, 250]} tick={false} axisLine={false} />
      <Radar dataKey={'value'} fill={colors.primaryColor} opacity={0.7} />
    </RadarChart>
  )

  return <div className="performance__chart">{renderRadarChart}</div>
}

Performance.propTypes = {
  performance: PropTypes.array.isRequired,
}

export default Performance
