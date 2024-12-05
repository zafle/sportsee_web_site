import PropTypes from 'prop-types'

/**
 * Renders the cursor to display on Average Sessions Chart when hover
 * This component is used in the Recharts 'Tooltip' component
 * @param {Object} props - The component props.
 * @param {array : [{x, y}, {x, y}]} props.points first object contains the start point (x, y) of the cursor stroke, second object the end point
 * @returns {React.ReactElement} A transparent black rectangle that displays on the right side of the hovered active point.
 */
function CustomizedCursor({ points }) {
    const startX = points[0].x

    return (
        <svg
            width="258"
            height="263"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x={startX}
                y="0"
                width="258"
                height="263"
                fill="black"
                opacity="0.1"
            />
        </svg>
    )
}

CustomizedCursor.propTypes = {
    points: PropTypes.array,
}
export default CustomizedCursor
