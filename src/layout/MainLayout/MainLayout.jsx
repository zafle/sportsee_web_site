import PropTypes from 'prop-types'
import Header from '../Header/Header'
// import Footer from '../Footer/footer.jsx'
import './_mainlayout.scss'

function MainLayout({ children }) {
    return (
        <div className="page-container">
            <Header />
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MainLayout
