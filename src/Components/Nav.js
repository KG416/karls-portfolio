
import { Link } from 'react-router-dom';

const Nav = (props) => {
    
    return(
        <nav className="main-nav">
            <Link to="/">
            <img className="karl-logo" src={props.logo} alt="Karls logo" />
            </Link>

            <div className="nav-btn-wrapper">
                <Link to='/contact'>
                    <button>Contact</button>
                </Link>

                <Link to="/portfolio">
                    <button>Portfolio</button>
                </Link>
            </div>
        </nav>
    )
}

export default Nav;