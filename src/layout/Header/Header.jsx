import logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import './_header.scss'

/**
 * Main App Header Component tha contains app logo and navigation menu
 * @returns {React.ReactElement} Header
 */
function Header() {
    return (
        <header className="main-header">
            <Link className="main-header__logo">
                <img src={logo} alt="logo SportSee" />
            </Link>
            <nav className="main-header__navigation">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/profile">Profil</NavLink>
                <NavLink to="/settings">Réglage</NavLink>
                <NavLink to="/community">Communauté</NavLink>
            </nav>
        </header>
    )
}

export default Header
