import React from 'react';
import { BalancesActionController } from '../controllers/BalancesActionController';
import { TransactionsListController } from '../controllers/TransactionsListController';
import { AccountSelector } from '../components/AccountSelector';
import { View } from '../components/View'

const AccountsView = () =>
    <View>
        <AccountSelector />
        <BalancesActionController />
        <TransactionsListController />
    </View>

export { AccountsView };
