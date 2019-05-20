import React from 'react';
import { browseTo } from '../dictionary/History'
import { PinCode } from '../dictionary/PinCode'

const ForgotView = () => {
    return (
        <div className='r-view'>
            <div className='r-forgot-wrapper'>
                <div className='r-forgot-pin'>
                    {PinCode}
                </div>
                <div className='r-forgot-try' onClick={() => browseTo('/')}>
                    Try again?
                </div>
            </div>
        </div>
    )
}

export { ForgotView };
