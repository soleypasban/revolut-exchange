import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ActionButton } from '../components/ActionButton';
import { CurrencyInputBox } from '../components/CurrencyInputBox';

const AddMoneyView = ({ match, history }) => {
    const onChangeCurrency = () => alert('chaneg')
    return (
        <div className='r-view'>
            <PageHeader label='Add money' onClose={() => history.push('/accounts')} />
            <div className='r-add-top-wrapper'>
                <div className='r-exchange-from-container'>
                    <CurrencyInputBox currency={match.params.currency} sign='+' balance={10.53} onChangeCurrency={onChangeCurrency} />
                </div>
            </div>
            <div className='r-add-bottom-wrapper'>
                <div className='r-add-button-container'>
                    <ActionButton label='Add money' />
                </div>
            </div>
        </div>
    )
}

export { AddMoneyView };
