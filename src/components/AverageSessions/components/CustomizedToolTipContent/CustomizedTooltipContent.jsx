import PropTypes from 'prop-types'
import './_CustomizedTooltipContent.scss'

/**
 * Renders the custom content for the tooltip in the Average Sessions Chart.
 * This component is used in the Recharts 'Tooltip' component to display session length ("value" min)
 * @param {Object} props - The component props.
 * @param {boolean} props.active - Indicates whether the tooltip is active.
 * @param {Array.<Object>} props.payload - Array of one object that contains the data from the tooltip.
 * @param {number} props.payload[0].value - sessionLength (chart's dataKey)
 *
 * @returns {React.ReactElement|null} The tooltip content or null if inactive.
 */
export default function CustomizedTooltipContent({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip__sessions">
                <span className="custom-tooltip__sessions--text">{`${payload[0].value} min`}</span>
            </div>
        )
    }

    return null
}

CustomizedTooltipContent.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
}
