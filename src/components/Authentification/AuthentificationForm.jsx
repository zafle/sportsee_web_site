import { useAccount } from '../../hooks/useAccount'
import { useDataOrigin } from '../../hooks/useDataOrigin'
import { useNavigate } from 'react-router-dom'

function AuthentificationForm() {
    const { defineUserId } = useAccount()
    const { defineIsMock } = useDataOrigin()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const userId = formData.get('userid')
        const dataOrigin = formData.get('data-origin')

        defineUserId(userId)
        defineIsMock(dataOrigin === 'mock' ? true : false)

        navigate(`/profile`, { replace: true })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userid">Identifiant utilisateur</label>
            <input type="text" name="userid" />
            <fieldset>
                <legend>Utliser les données depuis :</legend>
                <input type="radio" id="mock" name="data-origin" value="mock" />
                <label htmlFor="mock">Mock</label>
                <input type="radio" id="api" name="data-origin" value="api" />
                <label htmlFor="api">API</label>
            </fieldset>
            <button>Commencer</button>
        </form>
    )
}

export default AuthentificationForm
