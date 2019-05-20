import React from 'react';
import soleyPicture from '../assets/soley.jpg';
import { Footerbar } from '../components/Footerbar';

const RatesView = () => {
    return (
        <div className='r-view'>
            <div className='r-about-gradient' />
            <img className='r-about-icon' src={soleyPicture} alt='' />
            <div className='r-about-name'>Soley Pasban</div>
            <div className='r-about-email'>pasban110@gmail.com</div>
            <Footerbar />
        </div>
    )
}

export { RatesView };
