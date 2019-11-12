import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';

import { NextMovieTheme } from 'next-movie-components';

import { App } from '../app';

const engine = new Styletron();

export const Root = () => {
    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={NextMovieTheme}>
                <App />
            </BaseProvider>
        </StyletronProvider>
    );
};
