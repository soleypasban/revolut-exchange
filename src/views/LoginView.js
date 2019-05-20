import React, { useState } from 'react';
import { FORGOT, ERASE } from '../dictionary/LoginKeyPad'
import { browseTo } from '../dictionary/History';
import { PinCode } from '../dictionary/PinCode';
import { LoginWidget } from '../widgets/LoginWidget';

const LoginView = () => {

    const [pass, setPasscode] = useState('');

    const onClick = label => {
        if (label === ERASE) {
            setPasscode('')
        } else if (label === FORGOT) {
            browseTo('/forgot')
        } else {
            const newPasscode = `${pass}${label}`
            setPasscode(newPasscode)
            if (newPasscode.length === 4) {
                if (Number(newPasscode) === Number(PinCode)) {
                    browseTo('/accounts')
                }
                setTimeout(() => setPasscode(''), 500)
            }
        }
    }

    return <LoginWidget {...{ pass, onClick }} />
}

export { LoginView };
