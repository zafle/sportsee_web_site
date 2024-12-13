import Illustration404 from '../../../../assets/images/404_error_lost_in_space-rafiki.svg'

/**
 * Renders the illustration for Outlet Error 404 Page
 * Returns if Path = "/error/404"
 *
 * @returns {React.ReactElement} Illustration for Outlet's Error page
 */
function Error404() {
  return (
    <>
      <img
        className="error-page__image"
        src={Illustration404}
        alt="error 404"
      />
    </>
  )
}

export default Error404
