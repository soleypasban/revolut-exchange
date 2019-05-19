import React from 'react';
import { CurrencySign } from '../../dictionary/Currencies'
import { Images } from '../../images/Images';

const Transaction = ({
    amount,
    currency,
    date,
    description,
    icon,
    info,
    sign
}) =>
    <div className='r-transaction-wrapper'>
        <div className='r-transaction-info'>
            <span className='r-transaction-img'>{<img src={Images[icon]} alt='' />}</span>
            <div className='r-transaction-text'>
                <span>{description}</span>
                <span className='r-transaction-date'>{date}</span>
            </div>
        </div>
        <span className='r-transaction-amount'>
            <span>{sign}&nbsp;{CurrencySign[currency]}{amount}</span>
            <span className='r-transaction-extra-info'>{info}</span>
        </span>
    </div>

export { Transaction };