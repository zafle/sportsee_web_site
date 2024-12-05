import { BounceLoader } from 'react-spinners'
import './_Loader.scss'

/**
 * Renders a loader from React Spiners library
 * @returns {React.ReactElement}
 */

export default function Loader() {
    return <BounceLoader color="#ff0101" className="loader" />
}
