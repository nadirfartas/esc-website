import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Activities</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src=''
              text='Join our events'
              label='intriguing events'
              path='/events'
            />
            <CardItem
              src=''
              text='join our activities'
              label='esc nights'
              path='/activities'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src=''
              text='ESC leaders'
              label='who are they'
              path='/about'
            />
            <CardItem
              src=''
              text='read some articles'
              label='improve your english'
              path='/blog'
            />
            <CardItem
              src=''
              text='join'
              label='volunteering'
              path='/join'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
