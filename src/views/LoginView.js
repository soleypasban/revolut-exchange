import React, { useState } from 'react';
import revolutLogo from '../assets/revolutLogo.png'
import { FORGOT, ERASE } from '../dictionary/LoginKeyPad'
import { LoginPinCircles, LoginKeyboard } from '../components/Logins';

const LoginView = ({ history }) => {

    const [pass, setPasscode] = useState('');

    const onClick = label => {
        if (label === ERASE) {
            setPasscode('')
        } else if (label === FORGOT) {
            alert('FORGOT')
        } else {
            const newPasscode = `${pass}${label}`
            setPasscode(newPasscode)
            if (newPasscode.length === 4) {
                history.push('/accounts')
            }
        }
    }

    return (
        <div className='r-view'>
            <img className='r-login-logo' src={revolutLogo} alt='' />
            <LoginPinCircles pass={pass} />
            <LoginKeyboard isErasable={pass.length} onClick={onClick} />
        </div>
    )
}


export { LoginView };
