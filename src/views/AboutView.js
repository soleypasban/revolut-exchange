import React from 'react';
import soleyPicture from '../assets/soley.jpg';
import { View } from '../components/View'

const AboutView = () =>
    <View title='About'>
        <div className='r-about-gradient' />
        <img className='r-about-icon' src={soleyPicture} alt='' />
        <div className='r-about-name'>Soley Pasban</div>
        <div className='r-about-email'>pasban110@gmail.com</div>
    </View>

export { AboutView };
