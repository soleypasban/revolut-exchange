import React from 'react';

const ActionButton = ({ enable, label, children, onClick }) =>
    <div className={`r-action-button-wrapper ${enable ? '' : 'r-action-button-disabled'}`} onClick={() => enable && onClick()}>
        <span className='r-action-button-text'>{label}{children}</span>
    </div>

export { ActionButton };
