import PropTypes from 'prop-types'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './_Mainlayout.scss'

/**
 * Main App layout component
 * @param {{ children: JSX.Element}} children
 * @returns {JSX.Element}
 */
function MainLayout({ children }) {
    return (
        <div className="page-container">
            <Header />
            <Sidebar />
            <main>{children}</main>
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MainLayout
