import PropTypes from 'prop-types'
import './_CustomTooltip.scss'

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
