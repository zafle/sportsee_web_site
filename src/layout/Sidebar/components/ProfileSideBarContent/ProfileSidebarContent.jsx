import { Link } from 'react-router-dom'
import IconGym from '../../../../assets/images/icon-gym.svg'
import IconSwim from '../../../../assets/images/icon-swim.svg'
import IconBike from '../../../../assets/images/icon-bike.svg'
import IconWeight from '../../../../assets/images/icon-weight.svg'
import './_ProfileSidebarContent.scss'

/**
 * Renders React component for Sidebar content on Profile Page
 * Contains a menu to display differents page contents
 * @returns {React.ReactElement}
 */
function ProfileSidebarContent() {
    return (
        <div className="sidebar__content--profile">
            <Link to="/profile">
                <img src={IconGym} alt="gym" />
            </Link>
            <Link to="/profile">
                <img src={IconSwim} alt="natation" />
            </Link>
            <Link to="/profile">
                <img src={IconBike} alt="vélo" />
            </Link>
            <Link to="/profile">
                <img src={IconWeight} alt="haltères" />
            </Link>
        </div>
    )
}

export default ProfileSidebarContent
