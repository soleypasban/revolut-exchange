import React from 'react';

const ActionButton = ({ disabled, label, children, onClick }) =>
    <div className={`r-action-button-wrapper ${disabled ? 'r-action-button-disabled' : ''}`} onClick={() => !disabled && onClick()}>
        <span className='r-action-button-text'>{label}{children}</span>
    </div>

export { ActionButton };
