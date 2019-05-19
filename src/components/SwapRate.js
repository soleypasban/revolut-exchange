import React from 'react';
import { swap } from '../Icons';

const SwapRate = ({ onClick }) =>
    <div className='r-swap-rate-container' onClick={onClick}>
        {swap}
    </div>

export { SwapRate };
