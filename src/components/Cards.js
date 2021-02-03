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
              text='En simpel sida för att skapa, redigera och spara anteckningar. Gjord med några klasskompisar från kyh.'
              label='HTML, CSS, JavaScript, Figma'
            />

            <CardItem
              src='/images-public/aCaps4.jpg'
              text='Se till att ha vässat quiz-kunskaperna om den efterlängtade "På Spåret-förfrågan" skulle dyka upp.'
              label='HTML, CSS, JavaScript'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images-public/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
