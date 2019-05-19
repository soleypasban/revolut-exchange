import React from 'react';

const ActionButton = props =>
    <div className='r-action-button-wrapper'>
        <span className='r-action-button-text'>{props.label}{props.children}</span>
    </div>

export { ActionButton };
