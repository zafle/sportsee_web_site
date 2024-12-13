import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
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
    <ResponsiveContainer>
      <RadarChart
        margin={{ top: 15, right: 15, bottom: 15, left: 15 }}
        outerRadius="75%"
        innerRadius="-5%"
        startAngle={210}
        endAngle={570}
        data={data}
        className="radargraph__radarchart"
      >
        <PolarGrid stroke="white" radialLines={false} />
        <PolarAngleAxis
          dataKey={'kind'}
          tickLine={false}
          axisLine={false}
          tick={{
            fill: '#ffffff',
            fontWeight: 400,
          }}
          className="radargraph__radarchart--ticks"
        />
        <PolarRadiusAxis domain={[-50, 250]} tick={false} axisLine={false} />
        <Radar dataKey={'value'} fill={colors.primaryColor} opacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
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
