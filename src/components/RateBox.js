import React from 'react';
import { stockArrow } from '../images/Icons';
import { CurrencySign } from '../dictionary/Currencies'
import PropTypes from 'prop-types';

const RateBox = ({ from, to, rate }) =>
    <div className='r-rate-box-container'>
        {stockArrow} {CurrencySign[from]}{rate && 1}&nbsp;=&nbsp;{CurrencySign[to]}{(rate).toFixed(4)}
    </div>

RateBox.propTypes = {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
};

export { RateBox };
