import React from 'react';
import revolutLogo from '../assets/revolutLogo.png'
import { LoginPinCircles, LoginKeyboard } from '../components/Logins';
import { openFullscreen } from '../helpers/fullscreen';
import { View } from '../components/View'

const LoginWidget = ({ pass, onClick }) =>
    <View noFooter /* onClick={() => fullScreenIfSupported()} */>
        <div className='r-login-logo-container'>
            <img className='r-login-logo' src={revolutLogo} onClick={openFullscreen} alt='' />
        </div>
        <LoginPinCircles pass={pass} />
        <LoginKeyboard isErasable={pass.length} onClick={onClick} />
    </View>


export { LoginWidget };
