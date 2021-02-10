import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>

      <div className='footer-logo'>
        <Link to='/' className='social-logo'>
          Karl_<i className="fas fa-tree"></i>
        </Link>
      </div>

      <div className='social-wrap'>
        <a href="https://github.com/kg416" className="social-icon-link"> <i className="fab fa-github"></i> </a>
        <a href="mailto:kallegunnarsson@hotmail.com" className="social-icon-link"> <i className="fas fa-envelope"></i> </a>
        <a href="https://www.linkedin.com/in/karl-gunnarsson-2303251b6/" className="social-icon-link"> <i className='fab fa-linkedin' /> </a>
      </div>

      <small className='website-rights'>Created with React by Karl Gunnarsson © 2021</small>

    </div>
  );
}

export default Footer;
