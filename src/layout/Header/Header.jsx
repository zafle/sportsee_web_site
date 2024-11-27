import logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import './_header.scss'

function Header() {
    return (
        <header className="main-header">
            <Link className="main-header__logo">
                <img src={logo} alt="logo SportSee" />
            </Link>
            <nav className="main-header__navigation">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/profil/:id">Profil</NavLink>
                <NavLink to="/settings/:id">Réglage</NavLink>
                <NavLink to="/community/:id">Communauté</NavLink>
            </nav>
        </header>
    )
}

export default Header
