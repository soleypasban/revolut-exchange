import React from 'react';
import { Icons } from '../images/Icons';
import { browseTo } from '../dictionary/History';


const Footerbar = ({ }) =>
    <div className='r-footer-wrapper'>
        <FooterButton label='Accounts' icon='wallet' route='/accounts' />
        <FooterButton label='Rates' icon='stock' route='/rates' />
        <FooterButton label='Exchange' icon='exchange2' route='/exchange' />
        <FooterButton label='About' icon='info' route='/about' />
        <FooterButton label='Logout' icon='logout' route='/' />
    </div>

const FooterButton = ({ label, icon, route }) => {
    const path = window && window.location.pathname
    const isActive = (path === route)
    return (
        <div className={`r-footer-button ${isActive ? 'r-footer-button-active' : ''}`} onClick={() => browseTo(route)}>
            <span className='r-footer-button-icon'>{Icons[icon]}</span>
            <span className='r-footer-button-text'>{label}</span>
        </div>
    )
}

export { Footerbar };
