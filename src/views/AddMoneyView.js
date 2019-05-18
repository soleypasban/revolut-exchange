import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';

const AddMoneyView = ({ history }) => {
    return (
        <div className='r-view'>
            <PageHeader label='Add money' onClose={() => history.push('/accounts')} />
        </div>
    )
}

export { AddMoneyView };
