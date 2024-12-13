import IllustrationOther from '../../../../assets/images/Error_unknown.svg'

/**
 * Renders the illustration for Outlet Error Page
 * Returns if Path = "/error"
 *
 * @returns {React.ReactElement} Illustration for Outlet's Error page
 */
function ErrorOther() {
  return (
    <>
      <img
        className="error-page__image"
        src={IllustrationOther}
        alt="error unknown"
      />
      <p className="error-page__text">
        Désolés,
        <br /> une erreur
        <br />
        est survenue !
      </p>
    </>
  )
}
export default ErrorOther
