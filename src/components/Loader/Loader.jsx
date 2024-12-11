import { BounceLoader } from 'react-spinners'
import colors from '../../assets/colors/colors'
import './_Loader.scss'

/**
 * Renders a loader from React Spiners library
 * @returns {React.ReactElement}
 */

export default function Loader() {
  return <BounceLoader color={colors.primaryColor} className="loader" />
}
