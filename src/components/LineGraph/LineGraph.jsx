import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import ChartTitle from '../ChartTitle/ChartTitle'
import CustomizedActiveDot from './components/CustomizedActiveDot/CustomizedActiveDot'
import CustomizedCursor from './components/CustomizedCursor/CustomizedCursor'
import CustomizedTooltipContent from './components/CustomizedToolTipContent/CustomizedTooltipContent'
import PropTypes from 'prop-types'
import './_LineGraph.scss'

/**
 * Renders a customized LineChart developed with Recharts
 * Displays a single line chart
 * X axis ticks are added in a span tag
 *
 * @param {Object} props
 * @param {Object} props.data data for LineGraph
 * @param {Object[]} props.data.values data for LineChart
 * @param {string} props.data.values[].Xdata data for X axis
 * @param {integer} props.data.values[].Ydata data for Y axis
 * @param {string} props.data.unit  Y data unit, displays in Tooltip
 *
 * @param {string} props.title LineGraph Title
 *
 * @returns {React.ReactElement} A React component displaying a customized Recharts LineChart
 */

function LineGraph({ data, title }) {
  // set X axis ticks content in a string
  let ticks = ''
  data.values.map((value) => {
    ticks = ticks + value.Xdata
  })

  const renderLineChart = (
    <ResponsiveContainer>
      <LineChart
        data={data.values}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        className="linegraph__linechart"
      >
        <XAxis dataKey="Xdata" hide={true} />
        <YAxis hide={true} domain={['dataMin - 50', 'dataMax + 50']} />
        <Tooltip
          cursor={<CustomizedCursor />}
          content={<CustomizedTooltipContent unit={data.unit} />}
          wrapperStyle={{
            width: 40,
            height: 25,
            backgroundColor: 'white',
          }}
          itemStyle={{ fontSize: '8px' }}
        />
        <defs>
          <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
            <stop offset="80%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        <Line
          type="natural"
          dataKey="Ydata"
          dot={false}
          activeDot={<CustomizedActiveDot />}
          stroke="url(#gradientLine)"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  )

  return (
    <div className="linegraph">
      <ChartTitle title={title} classname="linegraph" />
      {renderLineChart}
      <span className="linegraph__ticks">{ticks}</span>
    </div>
  )
}

LineGraph.propTypes = {
  data: PropTypes.shape({
    values: PropTypes.arrayOf(
      PropTypes.shape({
        Xdata: PropTypes.string.isRequired,
        Ydata: PropTypes.number.isRequired,
      })
    ).isRequired,
    unit: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
}

export default LineGraph
