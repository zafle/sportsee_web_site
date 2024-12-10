import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from 'recharts'
import colors from '../../assets/colors/colors'
import PropTypes from 'prop-types'
import './_RadarGraph.scss'

/**
 * Customized RadarChart developed with Recharts
 * @param {Object} props
 * @param {Array.<Object>} data
 * @param {number} data[].value category'value
 * @param {number} data[].kind category's ID
 * @returns {React.ReactElement} A React component displaying a customized Chart
 */
function RadarGraph({ data }) {
  // construct Performance Chart using Recharts
  const renderRadarChart = (
    <RadarChart
      outerRadius={88}
      width={258}
      height={263}
      startAngle={210}
      endAngle={570}
      data={data}
      className="radargraph__radarchart"
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
        className="radargraph__radarchart--ticks"
      />
      <PolarRadiusAxis domain={[0, 250]} tick={false} axisLine={false} />
      <Radar dataKey={'value'} fill={colors.primaryColor} opacity={0.7} />
    </RadarChart>
  )

  return <div className="radargraph">{renderRadarChart}</div>
}

RadarGraph.propTypes = {
  data: PropTypes.array.isRequired,
}

export default RadarGraph
