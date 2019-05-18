import React, { useState } from 'react';
import revolutLogo from '../assets/revolutLogo.png'
import { Forgot, Enter } from '../dictionary/LoginKeyPad'
import { LoginPinCircles, LoginKeyboard } from '../components/Logins';

const LoginView = ({ history }) => {

    const [pass, setPasscode] = useState('');

    const onClick = label => {
        if (label === Enter) {
            if (pass.length === 4) {
                history.push('/accounts')
            } else {
                setPasscode('')
            }
        } else if (label === Forgot) {
            alert('Forgot')
        } else {
            setPasscode(`${pass}${label}`)
        }
    }

    return (
        <div className='r-view'>
            <img className='r-login-logo' src={revolutLogo} alt='' />
            <LoginPinCircles pass={pass} />
            <LoginKeyboard onClick={onClick} />
        </div>
    )
}


export { LoginView };
