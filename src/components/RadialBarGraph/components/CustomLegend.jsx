import PropTypes from 'prop-types'
import './_CustomLegend.scss'

/**
 * Renders a customized content for the Recharts Legend component displayed in Recharts RadialBarChart Component
 *
 * @param {Object} props The component props
 * @param {Object[]} props.payload contains Recharts Legend's data
 * @param {number} props.payload[].payload.value value of the data displayed in the chart
 *
 * @returns {React.ReactElement} A React component displaying a customized content for Legend
 */
function CustomLegend({ payload }) {
  return (
    <div className="score__legend">
      <span className="score__legend--percent">{`${payload[0].payload.value}%`}</span>
      <span className="score__legend--text">
        de votre <br /> objectif
      </span>
    </div>
  )
}

CustomLegend.propTypes = {
  payload: PropTypes.array,
}

export default CustomLegend
