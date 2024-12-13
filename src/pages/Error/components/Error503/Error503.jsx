import Illustration503 from '../../../../assets/images/503_Error_Service_Unavailable-bro.svg'

/**
 * Renders the illustration for Outlet Error 503 Page
 * Returns if Path = "/error/503"
 *
 * @returns {React.ReactElement} Illustration for Outlet's Error page
 */
function Error503() {
  return (
    <>
      <img
        className="error-page__image"
        src={Illustration503}
        alt="error 503"
      />
    </>
  )
}
export default Error503
