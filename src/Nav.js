import './App.css';
import logo from './img/karl-logo-v3.jpg';
import { Link } from 'react-router-dom';

const Nav = () => {
    

    return(
        <nav className="main-nav">
            <Link to="/">
            <img className="karl-logo" src={logo} alt="Karls logo" />
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