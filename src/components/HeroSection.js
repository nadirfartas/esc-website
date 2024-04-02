import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>English Speakers Club USTHB</h1>
        <p>what are you waiting for</p>
        <div className='hero-btns'>
            <Button 
               className='btns' 
               buttonStyle='btn--outline'
               buttonSize='btn--large'
               >
                About Us
               </Button>
            <Button 
               className='btns' 
               buttonStyle='btn--primary'
               buttonSize='btn--large'
               >
                Join us <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection