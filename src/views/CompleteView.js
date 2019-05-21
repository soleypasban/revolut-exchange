import React from 'react';
import { connect } from 'react-redux';
import { View } from '../components/View'
import { browseTo } from '../dictionary/History';
import { ActionButton } from '../components/ActionButton';
import { Icons } from '../images/Icons';

let CompleteView = ({ message }) =>
    <View noFooter>
        <div className='r-complete-icon'>{Icons[message.icon]}</div>
        <div className='r-complete-message'>{message.description}</div>
        <div className='r-complete-button-container'>
            <ActionButton label='Done' onClick={() => browseTo(message.backTo || '/accounts')} />
        </div>
    </View>

const mapStateToProps = state => ({
    message: state.settings.complete || {
        icon: 'succeed',
        description: 'There is nothing here!'
    }
})

CompleteView = connect(mapStateToProps)(CompleteView)

export { CompleteView };
