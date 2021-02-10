import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id='cards-id'>
      <h1 className='cards-h1'>Projekt jag skapat.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
              src='/images-public/quire-tr6.jpg'
              text='Här kan du skapa, redigera och spara anteckningar. Gjord tillsammans med några andra utvecklare.'
              label='HTML, CSS, Figma, Javascript'
              url='http://gutenberg-quire.surge.sh/'
            />

            <CardItem
              src='/images-public/aCaps4.jpg'
              text='En quiz för att testa dina färdigheter inom Afrikansk geografi.'
              label='HTML, CSS, Figma, Javascript'
              url='http://acaps.surge.sh/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images-public/slc-garage.jpg'
              text='En enkel info-sida som lär dig grunderna i Local Storage.'
              label='HTML, CSS, Figma, Javascript'
              url='http://simplelc.surge.sh/'
            />
            <CardItem
              src='/images-public/bass-filter.JPG'
              text='Portfoliosidan som du är inne på just nu har jag skapat med React.'
              label='HTML, CSS, Figma, Javascript, React'
              url='/'
            />
            <CardItem
              src='/images-public/firebase-logo.jpg'
              text='Mitt nästa projekt blir att lära mig om Firebase.'
              label='Nästa projekt...'
              url='https://firebase.google.com/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
