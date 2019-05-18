import React from 'react';
import { KeyLabels } from '../../dictionary/LoginKeyPad'

const LoginKeyboard = ({ onClick }) =>
    <div className='r-login-keypad-wrapper'>
        {KeyLabels.map((label, key) => <Keypad {...{ key, label, onClick }} />)}
    </div>

const Keypad = ({ label, onClick }) =>
    <div className='r-login-keypad-button' onClick={() => onClick(label)}>
        {label}
    </div>

export { LoginKeyboard };
