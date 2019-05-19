import React from 'react';
import { PageHeader } from '../components/PageHeader';

const ExchangeView = ({ match, history }) => {
    return (
        <div className='r-view'>
            <PageHeader label='Exchange' onClose={() => history.push('/accounts')} />
            <div className='r-exchange-top-wrapper'>
                <div className='r-exchange-from-container'>
                    a
                </div>
            </div>
            <div className='r-exchange-bottom-wrapper'>
                <div className='r-exchange-rate-container'>a</div>
                <div className='r-exchange-to-container'>a</div>
                <div className='r-exchange-button-container'>a</div>
            </div>
        </div>
    )
}

export { ExchangeView };
