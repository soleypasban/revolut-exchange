import React from 'react';
import { fire } from '../images/Icons';

const EmptyContent = ({ }) =>
    <div className='r-empty-wrapper'>
        <div className='r-empty-icon'>{fire}</div>
        There is nothing here!
    </div>

export { EmptyContent };
