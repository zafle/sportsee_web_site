import PropTypes from 'prop-types'
import './_UserKeyData.scss'

/**
 * Renders a React component to display user keyData
 *
 * @param {Object} props component's props
 * @param {string} props.count category's amount with unit
 * @param {string} props.kind category
 * @param {string} props.icon  path to icon image source file
 *
 * @returns {React.ReactElement}
 */
function UserKeyData({ count, kind, icon }) {
  return (
    <div className="keydata">
      <img className="keydata__image" src={icon} alt={kind} />
      <div className="keydata__text">
        <p className="keydata__text--count">{count}</p>
        <p className="keydata__text--kind">{kind}</p>
      </div>
    </div>
  )
}

UserKeyData.propTypes = {
  count: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default UserKeyData
