import PropTypes from 'prop-types'
import './_CustomizedTooltipContent.scss'

/**
 * Renders customized content for the Recharts Tooltip component displayed in the LineChart Recharts Component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.active - Indicates whether the tooltip is active.
 * @param {Object[]} props.payload - Array of one object that contains the data from the tooltip.
 * @param {number} props.payload[].value - Ydata value
 *
 * @param {string} props.unit - Ydata unit to display after the value
 *
 * @returns {React.ReactElement|null} A React component displaying a customized content for Tooltip | null if inactive.
 */
function CustomizedTooltipContent({ active, payload, unit }) {
  if (active && payload && payload.length) {
    return (
      <div className="linegraph__custom-tooltip">
        <span className="linegraph__custom-tooltip--text">{`${payload[0].value} ${unit}`}</span>
      </div>
    )
  }

  return null
}

CustomizedTooltipContent.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  unit: PropTypes.string,
}

export default CustomizedTooltipContent
