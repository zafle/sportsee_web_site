import { Legend, PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts'
import CustomLegend from './components/CustomLegend'
import ChartTitle from '../ChartTitle/ChartTitle'
import colors from '../../assets/colors/colors'
import PropTypes from 'prop-types'
import './_RadialBarGraph.scss'

/**
 * Renders a customized RadiaBarChart developed with Recharts
 * Displays one radial line that indicates a percentage
 *
 * @param {Object} props
 * @param {Object[]} props.data data for RadiaBarChart
 * @param {string} props.data[].name name for the displayed value
 * @param {number} props.data[].value value for displayed data
 *
 * @param {string} props.title title for ChartTitle Component
 *
 * @returns {React.ReactElement} A React component displaying a customized Recharts RadiaBarChart
 */
function RadialBarGraph({ data, title }) {
  const renderRadialBarChart = (
    <RadialBarChart
      width={258}
      height={263}
      innerRadius="69%"
      data={data}
      startAngle={80}
      endAngle={440}
      className="radialbargraph__radialbarchart"
    >
      <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
      <RadialBar
        dataKey="value"
        barSize={10}
        cornerRadius={'50%'}
        fill={colors.primaryColor}
      />
      <Legend
        wrapperStyle={{
          background: '#ffffff',
          borderRadius: '50%',
        }}
        width={160}
        height={160}
        layout="vertical"
        verticalAlign="middle"
        align="center"
        iconSize={0}
        content={<CustomLegend />}
      />
    </RadialBarChart>
  )

  return (
    <div className="radialbargraph">
      <ChartTitle title={title} classname="radialbargraph" />
      {renderRadialBarChart}
    </div>
  )
}

RadialBarGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
}

export default RadialBarGraph
