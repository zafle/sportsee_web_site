import { useLocation } from 'react-router-dom'
import ProfileSidebarContent from './components/ProfileSideBarContent/ProfileSidebarContent'
import './_Sidebar.scss'

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
