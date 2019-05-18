import React from 'react';
import revolutLogo from '../assets/revolutLogo.png'
import { Forgot, Enter, KeyLabels } from '../dictionary/LoginKeyPad'

const onClick = label => {
    if (label === Enter) {
        alert('Enter')
    } else if (label === Forgot) {
        alert('Forgot')
    } else {
        alert(Number(label))
    }
}

const LoginView = props =>
    <div className='r-login-view'>
        <img className='r-login-logo' src={revolutLogo} alt='' />
        <div className='r-login-pass'>
            <span className='r-login-pass-circle r-login-pass-circle-entered'></span>
            <span className='r-login-pass-circle'></span>
            <span className='r-login-pass-circle'></span>
            <span className='r-login-pass-circle'></span>
        </div>
        <div className='r-login-keypad-wrapper'>
            {KeyLabels.map((label, key) => <Keypad {...{ key, label, onClick }} />)}
        </div>
    </div>

const Keypad = ({ label, onClick }) =>
    <div className='r-login-keypad-button' onClick={() => onClick(label)}>
        {label}
    </div>

export { LoginView };
