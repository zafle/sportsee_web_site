import PropTypes from 'prop-types'
import './_CustomTooltip.scss'

/**
 * Renders the custom content for the Tooltip in Recharts BarChart.
 *
 * @param {Object} props - The component props.
 *
 * @param {boolean} props.active - Indicates whether the Tooltip is active.
 * @param {Object[]} props.payload - Array of two objects containing the data from the tooltip.
 * @param {number} props.payload[0].value - unit bar 1
 * @param {number} props.payload[1].value - unit bar 2
 *
 * @returns {React.ReactElement|null} The tooltip content | null if Tooltip is inactive.
 */
export default function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bargraph__custom-tooltip">
        <p>{`${payload[0].value}${payload[0].unit}`}</p>
        <p>{`${payload[1].value}${payload[1].unit}`}</p>
      </div>
    )
  }

  return null
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}
