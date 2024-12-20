import PropTypes from 'prop-types'

/**
 * Renders a customized cursor for the Recharts Tooltip to display in LineChart Recharts Component when hover
 *
 * @param {Object} props - The component props.
 * @param {Array.<{x: number, y: number}>} props.points - Array of two objects containing cursor coordinates
 * @param {number} props.points[0].x x coordinates of the cursor's line start point
 * @param {number} props.points[0].y y coordinates of the cursor's line start point
 * @param {number} props.points[1].x x coordinates of the cursor's line end point
 * @param {number} props.points[1].y y coordinates of the cursor's line end point
 *
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
