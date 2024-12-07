import { useAccount } from '../../hooks/useAccount'
import { useDataOrigin } from '../../hooks/useDataOrigin'
import { useNavigate } from 'react-router-dom'

/**
 * Component
 * User authentification and data source form
 */

function AuthentificationForm() {
    // use contexts
    const { defineUserId } = useAccount()
    const { isMock, defineIsMock } = useDataOrigin()

    const navigate = useNavigate()

    /**
     * Handle authentification form submit
     *
     */
    function handleChange(e) {
        defineIsMock(e.target.value === 'mock' ? true : false)
    }
    function handleSubmit(e) {
        defineUserId(e.target.value)
        navigate('/profile', { replace: true })
    }

    return (
        <>
            <form className="authentification_form">
                <fieldset>
                    <legend>Utliser les données depuis :</legend>
                    <input
                        type="radio"
                        id="mock"
                        name="data-origin"
                        value="mock"
                        checked={isMock === true}
                        onChange={handleChange}
                    />
                    <label htmlFor="mock">Mock</label>
                    <input
                        type="radio"
                        id="api"
                        name="data-origin"
                        value="api"
                        checked={isMock === false}
                        onChange={handleChange}
                    />
                    <label htmlFor="api">API</label>
                </fieldset>

                <button type="button" value="12" onClick={handleSubmit}>
                    Utilisateur 1
                </button>
                <button type="button" value="18" onClick={handleSubmit}>
                    Utilisateur 2
                </button>
            </form>
        </>
    )
}

export default AuthentificationForm
