import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';

import { NextMovieTheme } from 'next-movie-components';

import { store } from '../../redux';
import { App } from '../app';

import './root.css';

const engine = new Styletron();

export const Root = () => {
    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={NextMovieTheme}>
                <ReduxProvider store={store}>
                    <App />
                </ReduxProvider>
            </BaseProvider>
        </StyletronProvider>
    );
};
