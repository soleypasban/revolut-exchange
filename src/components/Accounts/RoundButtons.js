import React from 'react';
import { Icons } from '../../images/Icons';

const RoundButtons = props =>
    <div className='r-round-button-wrapper'>
        <span className='r-round-button-icon' onClick={props.onClick}>{Icons[props.icon]}</span>
        <span className='r-round-button-text'>{props.label}</span>
    </div>

export { RoundButtons };
