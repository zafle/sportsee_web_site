import PropTypes from 'prop-types'
import './_CustomizedTooltipContent.scss'

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
