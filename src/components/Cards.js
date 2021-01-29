import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (

    <div className='cards'>
      <h1>Projekt jag skapat.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            {/*
            LÄNK TILL QUIRE! 
            <a href="http://gutenberg-quire.surge.sh/">Länk till Quire!</a> 
            */}

            <CardItem
              src='images/img-9.jpg'
              text='Quire! by Gutenberg.'
              label='HTML, CSS, JavaScript, Figma'
              path='/services'
            />

            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
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