import React from 'react';
import { Icons } from '../images/Icons';
import { browseTo } from '../dictionary/History';

const Footerbar = ({ }) =>
    <div className='r-footer-wrapper'>
        <FooterButton label='Accounts' icon='wallet' onClick={() => browseTo('/accounts')} />
        <FooterButton label='Rates' icon='stock' onClick={() => browseTo('/rates')} />
        <FooterButton label='Exchange' icon='exchange2' onClick={() => browseTo('/exchange')} />
        <FooterButton label='About' icon='info' onClick={() => browseTo('/about')} />
        <FooterButton label='Logout' icon='logout' onClick={() => browseTo('/')} />
    </div>

const FooterButton = ({ label, icon, onClick }) =>
    <div className='r-footer-button' onClick={onClick}>
        <span className='r-footer-button-icon'>{Icons[icon]}</span>
        <span className='r-footer-button-text'>{label}</span>
    </div>

export { Footerbar };
