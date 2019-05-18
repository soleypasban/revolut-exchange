import React from 'react';
import { CurrencySign } from '../dictionary/Currencies'
import imgCoins from '../assets/coins.png'

const ImageIcons = {
    coins: <img src={imgCoins} alt='' />
}


const Transaction = props =>
    <div className='r-transaction-wrapper'>
        <div className='r-transaction-info'>
            <span className='r-transaction-img'>{ImageIcons[props.img]}</span>
            <div className='r-transaction-text'>
                {props.text}
                <span className='r-transaction-date'>2019/01/02 10:12</span>
            </div>
        </div>
        <span className='r-transaction-amount'>{CurrencySign[props.currency]}{props.amount}</span>
    </div>

export { Transaction };