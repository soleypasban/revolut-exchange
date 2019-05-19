import React from 'react';
import { stockArrow, swap } from '../Icons';
import { CurrencySign } from '../dictionary/Currencies'

const SwapRate = ({ from, to, rate, onClick}) =>
    <div className='r-swap-rate-container' onClick={onClick}>
        {swap}
    </div>

export { SwapRate };
