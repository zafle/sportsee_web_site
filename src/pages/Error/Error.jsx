import { Link, Outlet } from 'react-router-dom'
import './_Error.scss'

/**
 * Renders the content for Error Page
 * Path = "/error/404"- Outlet returns Error404 component
 * Path = "/error/503" - Outlet returns Error503 component
 * Path = "/error" - Outlet returns ErrorOther component
 *
 * @returns {React.ReactElement} Content for Error page
 */
function Error() {
  return (
    <div className="error-page">
      {/* Outlet returns an illustration according to url path */}
      <Outlet />

      {/* Link to Home page */}
      <Link to="/">
        <button className="error-page__button">Retour à l&apos;accueil</button>
      </Link>

      <a
        className="error-page__credit"
        href="https://storyset.com/online"
        target="__blank"
      >
        Crédit illustration : Online illustrations by Storyset
      </a>
    </div>
  )
}
export default Error
