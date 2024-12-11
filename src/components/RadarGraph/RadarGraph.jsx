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
 * Renders a customized RadarChart developed with Recharts
 * Displays a radar chart with 6 categories
 *
 * @param {Object} props
 * @param {Object[]} props.data data for RadarChart
 * @param {number} props.data[].value category'value
 * @param {string} props.data[].kind category's name
 *
 * @returns {React.ReactElement} A React component displaying a customized Recharts RadarChart
 */
function RadarGraph({ data }) {
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default RadarGraph
