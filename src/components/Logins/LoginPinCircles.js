import React from 'react';

const LoginPinCircles = ({ pass }) =>
    <div className='r-login-pass'>
        {
            [0, 0, 0, 0].map((code, index) => {
                const className = index < pass.length ? 'r-login-pass-circle r-login-pass-circle-entered' : 'r-login-pass-circle'
                return <span key={index} className={className}></span>
            })
        }
    </div>

export { LoginPinCircles };
