import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ActionButton } from '../components/ActionButton';
import { CurrencyInput } from '../components/CurrencyInput';
import { RateBox } from '../components/RateBox';

const ExchangeView = ({ match, history }) => {
    console.log(match)
    return (
        <div className='r-view'>
            <PageHeader label='Exchange' onClose={() => history.push('/accounts')} />
            <div className='r-exchange-top-wrapper'>
                <div className='r-exchange-from-container'>
                    <CurrencyInput currency={match.params.from} sign='-' balance={10.53} />
                </div>
            </div>
            <div className='r-exchange-bottom-wrapper'>
                <div className='r-exchange-rate-container'>
                    1
                    <RateBox from={match.params.from} to={match.params.to} rate={1.1524} />
                    <span />
                </div>
                <div className='r-exchange-to-container'>
                    <CurrencyInput currency={match.params.to} sign='+' balance={0.28} />
                </div>
                <div className='r-exchange-button-container'>
                    <ActionButton label='Exchange' />
                </div>
            </div>
        </div>
    )
}

export { ExchangeView };
