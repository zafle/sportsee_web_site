import PropTypes from 'prop-types'

/**
 * Renders a customized active dot to display in Recharts LineChart when hover (active dot)
 *
 * @param {Object} props - The component props.
 * @param {number} props.cx x dot coordinates
 * @param {number} props.cy y dot coordinates
 *
 * @returns {React.ReactElement} Returns the svg for the LineChart active dot
 */

function CustomizedActiveDot({ cx, cy }) {
  return (
    <svg
      x={cx - 9}
      y={cy - 9}
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13.8607C11.2091 13.8607 13 12.0809 13 9.88545C13 7.68999 11.2091 5.91022 9 5.91022C6.79086 5.91022 5 7.68999 5 9.88545C5 12.0809 6.79086 13.8607 9 13.8607Z"
        fill="white"
      />
      <path
        d="M9 16.3607C12.5752 16.3607 15.5 13.4762 15.5 9.88545C15.5 6.29466 12.5752 3.41022 9 3.41022C5.42481 3.41022 2.5 6.29466 2.5 9.88545C2.5 13.4762 5.42481 16.3607 9 16.3607Z"
        stroke="white"
        strokeOpacity="0.198345"
        strokeWidth="5"
      />
    </svg>
  )
}

export default CustomizedActiveDot

CustomizedActiveDot.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
}
