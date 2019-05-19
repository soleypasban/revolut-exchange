import React from 'react';

const ActionButton = ({ label, children, onClick }) =>
    <div className='r-action-button-wrapper' onClick={onClick}>
        <span className='r-action-button-text'>{label}{children}</span>
    </div>

export { ActionButton };
