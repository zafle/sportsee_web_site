import { useNavigate } from 'react-router-dom'
import useAccount from '../../hooks/useAccount'
import useDataOrigin from '../../hooks/useDataOrigin'
import './_AuthentificationForm.scss'

/**
 * Renders the Authentification Form React Component to display in Home Component.
 * Allows to choose between the 2 availables sources to get data : API or Mock with radio inputs
 * Allows to log in as user 1 or user 2 with 2 buttons
 * Will save userId value into AccountContext
 * Will save isMock boolean value into DataOriginContext
 * Will redirect to Profile page
 *
 * @returns {React.ReactElement} Returns a controlled form to log in and choose data source
 */

function AuthentificationForm() {
  // get values and functions from AccountContext and DataOriginContext
  const { defineUserId } = useAccount()
  const { isMock, defineIsMock } = useDataOrigin()

  const navigate = useNavigate()

  /**
   * Handles change event on radio inputs (Mock and API)
   * Set isMock value into context and localstorage (true if "mock", false if "api")
   *
   * @param {Object} e Change event that occurs on Mock radio input or API radio input
   *
   */
  function handleChange(e) {
    defineIsMock(e.target.value === 'mock' ? true : false)
  }

  /**
   * Handles click event on USer 1 and User 2 buttons
   * Set userId (clicked button's value) into context and localstorage.
   * Redirect to Profil page
   *
   * @param {Object} e Click event that occurs on User 1 and User 2 buttons
   *
   */
  function handleSubmit(e) {
    defineUserId(parseInt(e.target.value))
    navigate('/profile', { replace: true })
  }

  return (
    <>
      <form className="authentification_form">
        <fieldset className="authentification_form__datasource">
          <legend>Utliser les données depuis :</legend>
          <input
            className="authentification_form__radio"
            type="radio"
            id="mock"
            name="data-origin"
            value="mock"
            checked={isMock === true}
            onChange={handleChange}
          />
          <label htmlFor="mock">Mock</label>
          <input
            className="authentification_form__radio"
            type="radio"
            id="api"
            name="data-origin"
            value="api"
            checked={isMock === false}
            onChange={handleChange}
          />
          <label htmlFor="api">API</label>
        </fieldset>

        <button
          className="authentification_form__button"
          type="button"
          value="12"
          onClick={handleSubmit}
        >
          Utilisateur 1
        </button>
        <button
          className="authentification_form__button"
          type="button"
          value="18"
          onClick={handleSubmit}
        >
          Utilisateur 2
        </button>
      </form>
    </>
  )
}

export default AuthentificationForm
