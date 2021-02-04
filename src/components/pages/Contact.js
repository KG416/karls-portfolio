import './Contact.css';
/* import Footer from '../Footer'; */

export default function Contact() {
  return (<>
    <div className='contact-master'>
      <div className='contact-container'>
        <h1 className="mailh1">Kontakt</h1>

        <div className="contact-mail">
          <h2 className="contact-para">kallegunnarsson@hotmail.com</h2>
        </div>

        <div className="contact-wrap">
          <a href="https://www.linkedin.com/in/karl-gunnarsson-2303251b6/" className="contactIcon">
            <h2 className="mailh2">Linked</h2>
            <i className='fab fa-linkedin' />
          </a>
        </div>

        <div className="contact-wrap">
          <a href="https://github.com/kg416" className="contact-icon">
            <h2 className="mailh2">GitHub</h2>
            <i className="fab fa-github"></i>
          </a>
        </div>

      </div >
    </div>
    {/* <Footer /> */}
  </>)
}
