import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from '../components/PageHeader';

let DetailsView = ({ history }) => {
    return (
        <div className='r-view'>
            <PageHeader label='Add money' onClose={() => history.push('/accounts')} />
            <div className='r-add-top-wrapper'>
                DetailsView
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const currency = state.settings.currencies.add
    const currentBalance = (state.balance[currency] || 0)
    return { currentBalance, currency }
}

DetailsView = connect(mapStateToProps)(DetailsView)

export { DetailsView };
