import PropTypes from 'prop-types'

function CustomizedCursor(props) {
    const { points } = props
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
