import PropTypes from 'prop-types'

/**
 * Check if provided user id from home page authentification form is in the data base
 * @param {number} userId user id from authentification form
 * @returns {boolean} userExists
 */
export function checkUser(userId) {
    const USERS = [12, 18]
    const user = USERS.find((user) => user === parseInt(userId))
    const userExists = user === undefined ? false : true

    return userExists
}

checkUser.propTypes = {
    userId: PropTypes.number.isRequired,
}
