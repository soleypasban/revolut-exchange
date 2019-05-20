import React from 'react';
import { Icons } from '../images/Icons';

const Footerbar = ({ }) =>
    <div className='r-footer-wrapper'>
        <div className='r-footer-button'>
            <span className='r-footer-button-icon' onClick={null}>{Icons['close']}</span>
            <span className='r-footer-button-text'>Accounts</span>
        </div>
    </div>

export { Footerbar };
