import { useLocation } from 'react-router-dom'
import ProfileSidebarContent from './components/ProfileSideBarContent/ProfileSidebarContent'
import './_Sidebar.scss'

/**
 * Renders the main App Sidebar displayed on all pages
 * The sidebar content will change based upon the url of the it is displayed on.
 * @returns {React.ReactElement} Sidebar
 */
function Sidebar() {
    const location = useLocation()

    function displaySidebarContent() {
        switch (location.pathname) {
            case '/profile':
                return <ProfileSidebarContent />
            default:
                return null
        }
    }
    return (
        <aside className="sidebar">
            {displaySidebarContent()}
            <span className="sidebar__copyright">Copiryght, SportSee 2020</span>
        </aside>
    )
}

export default Sidebar
