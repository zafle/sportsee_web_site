import { Legend, PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts'
import { CustomLegend } from './components/CustomLegend'
import ChartTitle from '../ChartTitle/ChartTitle'
import colors from '../../assets/colors/colors'
import PropTypes from 'prop-types'
import './_RadialBarGraph.scss'

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
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default RadialBarGraph
