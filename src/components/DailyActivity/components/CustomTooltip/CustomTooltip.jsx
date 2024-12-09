import PropTypes from 'prop-types'
import './_CustomTooltip.scss'

/**
 * Renders the custom content for the tooltip in the Daily Activity Chart.
 * This component is used in the Recharts 'Tooltip' component to display the user weight and the amount of calories("value"kg) ("value"Kcal).
 * @param {Object} props - The component props.
 * @param {boolean} props.active - Indicates whether the tooltip is active.
 * @param {Array.<Object>} props.payload - Array of two objects containing the data from the tooltip.
 * @param {number} props.payload[0].value - kilogram (chart's dataKey)
 * @param {number} props.payload[1].value - calories (chart's dataKey)
 * @returns {React.ReactElement|null} The tooltip content or null if inactive.
 */
export default function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="custom-tooltip__weight">{`${payload[0].value}${payload[0].dataKey}`}</p>
        <p className="custom-tooltip__cal">{`${payload[1].value}${payload[1].dataKey}`}</p>
      </div>
    )
  }

  return null
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}
