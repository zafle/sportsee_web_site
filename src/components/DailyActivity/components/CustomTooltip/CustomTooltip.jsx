import PropTypes from 'prop-types'
import './_CustomTooltip.scss'

/**
 * Renders the custom content for the tooltip in the Daily Activity Chart.
 * This component is used in the Recharts 'Tooltip' component to display the user weight and the amount of calories.
 * @param {Object} props - The component props.
 * @param {boolean} props.active - Indicates whether the tooltip is active.
 * @param {Array<Object>} props.payload - Contains the data from the tooltip.
 * @returns {React.ReactElement|null} The tooltip content or null if inactive.
 */
export default function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="custom-tooltip__weight">{`${payload[0].value}kg`}</p>
                <p className="custom-tooltip__cal">{`${payload[1].value}Kcal`}</p>
            </div>
        )
    }

    return null
}

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
}
