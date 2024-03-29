import React from 'react';
import { Icons } from '../images/Icons';

const PageHeader = ({ title, onClose }) =>
    <div className='r-page-header'>
        <div className='r-page-title'>
            <span className='r-page-header-icon' onClick={onClose}>{Icons['close']}</span>
            <span className='r-page-header-text'>{title}</span>
        </div>
    </div>

export { PageHeader };
