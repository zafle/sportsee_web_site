import PropTypes from 'prop-types'
import './_ChartTitle.scss'

/**
 * Renders the title for Charts
 *
 * @param {string} title
 * @param {string} classname has to be different for each title to be able to add different scss for each one
 *
 * @returns {React.ReactElement} A React Component displaying a chart title
 */
export default function ChartTitle({ title, classname }) {
    return <h2 className={`chart_title chart_title--${classname}`}>{title}</h2>
}

ChartTitle.propTypes = {
    title: PropTypes.string.isRequired,
    classname: PropTypes.string.isRequired,
}
