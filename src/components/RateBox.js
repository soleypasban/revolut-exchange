import React from 'react';
import { stockArrow } from '../images/Icons';
import { CurrencySign } from '../dictionary/Currencies'

const RateBox = ({ from, to, rate }) =>
    <div className='r-rate-box-container'>
        {stockArrow} {CurrencySign[from]}{rate && 1}&nbsp;=&nbsp;{CurrencySign[to]}{(rate).toFixed(4)}
    </div>

export { RateBox };
