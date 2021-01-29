import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Karl_<i className="fas fa-tree"></i>
            </Link>
          </div>
          <small class='website-rights'>Karl Gunnarsson © 2021</small>
          <div class='social-icons'>

            <a href="https://github.com/kg416" className="social-icon-link"> <i class="fab fa-github"></i> </a>

            <a href="https://www.linkedin.com/in/karl-gunnarsson-2303251b6/" className="social-icon-link"> <i class='fab fa-linkedin' /> </a>



          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
