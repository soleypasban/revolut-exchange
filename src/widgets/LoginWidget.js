import React from 'react';
import revolutLogo from '../assets/revolutLogo.png'
import { LoginPinCircles, LoginKeyboard } from '../components/Logins';
import { openFullscreen } from '../helpers/fullscreen';
import { View } from '../components/View'
import { Language } from '../context/Language';

const LoginWidget = ({ pass, onClick }) =>
    <Language.Consumer>
        {context => {
            // console.log(context)
            return <View noFooter>
                {/* {context.translate('balance')}
                <button onClick={() => context.setLanguage(context.languages.find(l => l !== context.language))}>change</button> */}
                <div className='r-login-logo-container'>
                    <img className='r-login-logo' src={revolutLogo} onClick={openFullscreen} alt='' />
                </div>
                <LoginPinCircles pass={pass} />
                <LoginKeyboard isErasable={pass.length} onClick={onClick} />
            </View>
        }
        }
    </Language.Consumer>

export { LoginWidget };
