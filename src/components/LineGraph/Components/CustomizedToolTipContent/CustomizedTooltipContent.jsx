import PropTypes from 'prop-types'
import './_CustomizedTooltipContent.scss'

/**
 * Renders the custom content for the Tooltip in the LineGraph React Component.
 * @param {Object} props - The component props.
 * @param {boolean} props.active - Indicates whether the tooltip is active.
 * @param {Array.<Object>} props.payload - Array of one object that contains the data from the tooltip.
 * @param {number} props.payload[0].value - Ydata value
 *
 * @returns {React.ReactElement|null} The tooltip content or null if inactive.
 */
export default function CustomizedTooltipContent({ active, payload, unit }) {
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
