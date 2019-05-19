import React from 'react';
import { stockArrow } from '../Icons';
import { CurrencySign } from '../dictionary/Currencies'

const RateBox = ({ from, to, rate }) =>
    <div className='r-rate-box-container'>
        {stockArrow} {CurrencySign[from]}1&nbsp;=&nbsp;{CurrencySign[to]}{rate}
    </div>

export { RateBox };
