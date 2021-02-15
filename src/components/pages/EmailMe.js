/* 
Mailtjänst
https://www.emailjs.com/

Kort tutorial om tjänsten:
https://www.youtube.com/watch?v=NgWGllOjkbs
*/
import './EmailMe.css'
import emailjs from 'emailjs-com'
import Footer from '../Footer'
/* import ThankYouForMail from './ThankYouForMail' */

export default function EmailMe() {

  const sendEmail = (e) => {
    e.preventDefault();

    /*  if (nameInput.value === '' || messageInput.value === '' || emailInput.value) {
       alert('Vänligen skriv namn, mailadress och meddelande innan du skickar.')
     } else { */
    emailjs.sendForm('service_x7s5hgx', 'template_ak4ptsg', e.target, 'user_2uSb1fHmE9hpcwOQVXy5f')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
    alert('Tack för ditt mail! Jag återkommer så snart som möjligt till mailadressen du angav. /Karl')
    /*    } */
  }

  /*  const thanksTestFunc = () => {
     console.log('thanksTestFunc ran');
     return (
       <>
 
       </>
     )
   } */

  return (<>
    <div className='mail-wrapper'>
      <h1 className='email-me-h1'>Maila mig</h1>

      <div className='mail-main'>

        <div className='mail-info'>
          {/* <button className='thanksTEST' onClick={thanksTestFunc}>Tack-TEST</button> */}
          <h2>Tveka inte att skicka ett mail till mig</h2>
          <h3>Föredrar du copy+paste?</h3>
          <p>kallegunnarsson@hotmail.com</p>
        </div>

        <form className='mail-form' onSubmit={sendEmail}>
          {/* <label>Ditt namn</label> */}
          <input type="text" placeholder='Namn' name="user_name" className='form-name' />

          {/* <label>Din mailadress</label> */}
          <input type="email" placeholder='Mailadress' name="user_email" className='form-mail' />

          {/* <label>Meddelande</label> */}
          <textarea name="user_message" placeholder='Meddelande' className='form-message' />

          <input type="submit" value="SKICKA" className='form-send' />
        </form>

      </div>
    </div>
    <Footer />
  </>)
}
