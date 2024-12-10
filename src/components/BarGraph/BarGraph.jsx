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
import './_BarGraph.scss'
import PropTypes from 'prop-types'

/**
 * Customized BarChart developed with Recharts
 * Uses a custom Tooltip
 * Chart Title is a distinct React component
 * @param {Object} props
 * @param {Object} data
 * @param {Array.<Object>} data.values[] Array of objects containing the barchart values
 * @param {string} data.values[].XaxisTick Tick for X axis
 * @param {number} data.values[].YdataBar1 Data for Bar 1
 * @param {number} data.values[].YdataBar2 Data for Bar 2
 * @param {Object} data.units Object contaning the bars units to use in Tooltip and Legend
 * @param {string} data.units.unitBar1 Data unit for Bar 1, displays in Tooltip
 * @param {string} data.units.unitBar2 Data unit for Bar 2, displays in Tooltip
 * @param {string} data.units.nameBar1 Data name for bar 1, displays in Legend
 * @param {string} data.units.nameBar2 Data name for Bar 2, displays in Legend
 * @param {string} title Chart title
 * @returns {React.ReactElement} A React component displaying a customized BarChart
 */

function BarGraph({ data, title }) {
  // Construct the BarChart with Recharts
  const renderBarChart = (
    <BarChart
      width={835}
      height={320}
      data={data.values}
      barGap={8}
      margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
      className="bargraph__barchart"
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis
        dataKey="XaxisTick"
        axisLine={false}
        tickLine={false}
        dy={16}
        tick={{ fill: colors.lightGrey, fontSize: 14 }}
      />
      <YAxis
        yAxisId="bar1"
        dataKey="YdataBar1"
        orientation="right"
        domain={['dataMin - 1', 'dataMax + 1']}
        tickCount={4}
        axisLine={false}
        tickLine={false}
        dx={24}
        tick={{ fill: colors.lightGrey, fontSize: 14 }}
      />
      <YAxis
        yAxisId="bar2"
        domain={['dataMin - 100', 'dataMax + 10']}
        hide={true}
      />
      <Bar
        yAxisId="bar1"
        unit={data.units.unitBar1}
        name={data.units.nameBar1}
        dataKey="YdataBar1"
        fill={colors.secondaryContrast}
        barSize={7}
        radius={[3, 3, 0, 0]}
      />
      <Bar
        yAxisId="bar2"
        unit={data.units.unitBar2}
        name={data.units.nameBar2}
        dataKey="YdataBar2"
        fill={colors.primaryContrast}
        barSize={7}
        radius={[3, 3, 0, 0]}
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
          <span className="bargraph__barchart--legend">{value}</span>
        )}
        wrapperStyle={{
          paddingBottom: '48px',
          marginRight: '-30px',
        }}
      />
    </BarChart>
  )

  return (
    <div className="bargraph">
      <ChartTitle title={title} classname="bargraph" />
      {renderBarChart}
    </div>
  )
}
export default BarGraph

BarGraph.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}
