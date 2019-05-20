import React from 'react';
import { browseTo } from '../dictionary/History'
import { PageHeader } from '../components/PageHeader';
import soleyPicture from '../assets/soley.jpg';
import { Footerbar } from '../components/Footerbar';

const AboutView = () => {
    return (
        <div className='r-view'>
            <PageHeader label='About' onClose={() => browseTo('/accounts')} />
            <div className='r-about-gradient' />
            <img className='r-about-icon' src={soleyPicture} alt='' />
            <div className='r-about-name'>Soley Pasban</div>
            <div className='r-about-email'>pasban110@gmail.com</div>

            <Footerbar />
        </div>
    )
}

export { AboutView };
