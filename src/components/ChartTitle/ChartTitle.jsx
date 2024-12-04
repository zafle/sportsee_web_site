import PropTypes from 'prop-types'
import './_ChartTitle.scss'

export default function ChartTitle({ title, classname }) {
    return <h2 className={`chart_title chart_title--${classname}`}>{title}</h2>
}

ChartTitle.propTypes = {
    title: PropTypes.string.isRequired,
    classname: PropTypes.string.isRequired,
}
