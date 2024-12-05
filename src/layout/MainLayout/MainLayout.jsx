import PropTypes from 'prop-types'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './_Mainlayout.scss'

/**
 * Renders main App layout React component with main Header and main Sidebar
 * @param {Object} props
 * @param {React.ReactNode} props.children - React components that will display inside the layout.
 * @returns {React.ReactElement} A React component to display mainlayout
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
