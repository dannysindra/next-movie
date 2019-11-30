import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '../../redux';

import { App } from './app';

export default {
    title: 'App'
};

export const base = () => (
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
);
