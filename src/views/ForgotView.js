import React from 'react';
import { browseTo } from '../dictionary/History'
import { PinCode } from '../dictionary/PinCode'
import { View } from '../components/View'

const ForgotView = () =>
    <View noFooter>
        <div className='r-forgot-wrapper'>
            <div className='r-forgot-pin'>
                {PinCode}
            </div>
            <div className='r-forgot-try' onClick={() => browseTo('/')}>
                Try again?
                </div>
        </div>
    </View>

export { ForgotView };
