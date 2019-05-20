import React from 'react';
import { ActionButton } from '../components/ActionButton';
import { CurrencyInputBox } from '../components/CurrencyInputBox';
import { CurrencySelector } from '../components/CurrencySelector';
import { Footerbar } from '../components/Footerbar';
import { View } from '../components/View'

let AddMoneyWidget = ({
    currentBalance,
    account,
    amount,
    setAmount,
    onChangeCurrency,
    addMoneyAndGoBack,
    showSelector,
    onSelectCurrency
}) =>
    <View title='Add money'>
        <div className='r-add-top-wrapper'>
            <div className='r-exchange-from-container'>
                <CurrencyInputBox
                    balance={currentBalance}
                    currency={account}
                    sign='+'
                    value={amount}
                    onChange={setAmount}
                    onChangeCurrency={onChangeCurrency}
                />
            </div>
        </div>
        <div className='r-add-bottom-wrapper'>
            <div className='r-add-button-container'>
                <ActionButton disabled={!(Math.abs(amount) > 0)} label='Add money' onClick={addMoneyAndGoBack} />
            </div>
        </div>
        <Footerbar />
        {showSelector && <CurrencySelector selected={showSelector.selected} onSelectCurrency={onSelectCurrency} />}
    </View>

export { AddMoneyWidget };
