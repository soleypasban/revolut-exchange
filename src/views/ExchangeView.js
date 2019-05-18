import React from 'react';
import { PageHeader } from '../components/PageHeader';

const ExchangeView = ({ match, history }) => {
    return (
        <div className='r-view'>
            <PageHeader label='Exchange' onClose={() => history.push('/accounts')} />
        </div>
    )
}

export { ExchangeView };
