import React, { useEffect, useState } from 'react';

import './hero.css';

const Hero = () => {


  return (
    <section>
      <div className='hero'>
        {/* <img src='/assets/image/things-you-need.png' alt='' /> */}
        <div className='hero-content'>
            <h3>
               World leading Univerity of Science and Technology in Nigeria  
            </h3> 
            <div  className='hero-content-button'>
                <a href='#' className='btn-theme'>
                    Apply
                </a>   
                <a href='#' className='btn-discover ml-4'>
                    Discover
                </a>   
            </div>

           
        </div>
      </div>
    </section>
  )
}

export default Hero