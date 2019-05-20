import React from 'react';
import { PageHeader } from './PageHeader';
import { Footerbar } from './Footerbar';
import { browseTo } from '../dictionary/History';

const View = ({ title, backTo, children, noFooter }) =>
    <div className='r-view'>
        {title && <PageHeader title={title} onClose={() => browseTo(backTo || '/accounts')} />}
        {children}
        {!noFooter && <Footerbar />}
    </div>

export { View };
