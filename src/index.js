import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';

import { NextMovieTheme } from 'next-movie-components';

import { store } from './redux';
import { App } from './views/app';

import './index.css';

const engine = new Styletron();

const Root = () => {
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

ReactDOM.render(<Root />, document.getElementById('root'));
