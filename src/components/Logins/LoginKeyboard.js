import React from 'react';
import { KeyLabels, KeyValues, ERASE } from '../../dictionary/LoginKeyPad'

const LoginKeyboard = ({ onClick, isErasable }) =>
    <div className='r-login-keypad-wrapper'>
        {KeyLabels.map((label, index) => {
            // const value = (label === ERASE) ? (isErasable ? KeyValues[index] : null) : KeyValues[index]
            const value = KeyValues[index]
            return <Keypad {...{ key: index, value, label, onClick }} />
        })}
    </div>

const Keypad = ({ label, value, onClick }) =>
    <div className='r-login-keypad-button' onClick={() => onClick(label)}>
        {value}
    </div >

export { LoginKeyboard };
