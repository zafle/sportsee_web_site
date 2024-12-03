import { useState } from 'react'
import { useAccount } from '../../hooks/useAccount'
import { useDataOrigin } from '../../hooks/useDataOrigin'
import { useNavigate } from 'react-router-dom'
import { checkUser } from '../../services/checkUser'

/**
 * Component
 * User authentification and data source form
 */

function AuthentificationForm() {
    const [user, setUser] = useState(null)
    const [formError, setFormError] = useState(false)
    // use contexts
    const { defineUserId } = useAccount()
    const { defineIsMock } = useDataOrigin()

    const navigate = useNavigate()

    /**
     * Handle authentification form submit
     *
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        // retrieve form datas
        const formData = new FormData(e.target)
        const userId = formData.get('userid')
        const dataOrigin = formData.get('data-origin')

        // if all fields are complete
        if (userId !== null && dataOrigin !== null) {
            // reset formError
            setFormError(false)
            // check if user exists
            const userExists = checkUser(userId)
            if (userExists) {
                // save user id into context and localstorage
                defineUserId(userId)
                // save the data source chosen (API or Mock)
                defineIsMock(dataOrigin === 'mock' ? true : false)
                //  go to page Profil
                navigate(`/profile`, { replace: true })
            } else {
                setUser('unknown')
            }
        } else {
            setFormError(true)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="authentification_form">
            <label htmlFor="userid">Identifiant utilisateur</label>
            <input type="text" name="userid" />
            <fieldset>
                <legend>Utliser les données depuis :</legend>
                <input type="radio" id="mock" name="data-origin" value="mock" />
                <label htmlFor="mock">Mock</label>
                <input type="radio" id="api" name="data-origin" value="api" />
                <label htmlFor="api">API</label>
            </fieldset>
            {user === 'unknown' && (
                <p className="authentification_form__error">
                    Cet utilisateur n&apos;existe pas
                </p>
            )}
            {formError === true && (
                <p className="authentification__error">
                    Veuillez indiquer une ID valide et choisir la source de
                    données
                </p>
            )}
            <button>Commencer</button>
        </form>
    )
}

export default AuthentificationForm
