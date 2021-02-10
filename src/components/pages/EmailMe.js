/* 
Mailtjänst
https://www.emailjs.com/

Kort tutorial om tjänsten:
https://www.youtube.com/watch?v=NgWGllOjkbs
*/
import './EmailMe.css'
import emailjs from 'emailjs-com'
import Footer from '../Footer'
import FetchData2 from '../FetchData2'
/* import ThankYouForMail from './ThankYouForMail' */

export default function EmailMe() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x7s5hgx', 'template_ak4ptsg', e.target, 'user_2uSb1fHmE9hpcwOQVXy5f')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
    alert('Tack för ditt mail! Jag återkommer så snart som möjligt till mailadressen du angav. /Karl')
  }

  /*  const thanksTestFunc = () => {
     console.log('thanksTestFunc ran');
     return (
       <>
 
       </>
     )
   } */

  return (<>
    <div className='mail-main'>
      {/* <div className='email-me-container'> */}

      <div className='mail-info'>
        {/* <button className='thanksTEST' onClick={thanksTestFunc}>Tack-TEST</button> */}
        <h2>Tveka inte att skicka ett mail till mig</h2>
        <h3>Föredrar du copy+paste?</h3>
        <p>kallegunnarsson@hotmail.com</p>
      </div>

      <form onSubmit={sendEmail} className='mail-form'>
        <h1>Maila mig</h1>

        <label>Ditt namn</label>
        <input type="text" name="user_name" className='form-name' />

        <label>Din mailadress</label>
        <input type="email" name="user_email" className='form-mail' />

        <label>Meddelande</label>
        <textarea name="user_message" className='form-message' />

        <input type="submit" value="SKICKA" className='form-send' />
      </form>

      <div className='cat-wrap'>
        <h2 className='cat-h2'>Dagens katt</h2>
        {/* <FetchData /> */}
        <FetchData2 />

      </div>

      {/*   </div> */}

    </div>
    <Footer />
  </>)
}
