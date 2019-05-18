import React from 'react';
import { Icons } from '../Icons';

const PageHeader = ({ label, onClose }) =>
    <div className='r-page-header'>
        <div className='r-page-title'>
            <span className='r-page-header-icon' onClick={onClose}>{Icons['close']}</span>
            <span className='r-page-header-text'>{label}</span>
        </div>
    </div>

export { PageHeader };
