import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import { ApolloProvider } from 'react-apollo';

import { NextMovieTheme } from 'next-movie-components';

import { client } from './apollo-client';
import { engine } from './styletron-client';
import { Firebase } from './utils';
import { App } from './views/app';

import './index.css';

const Root = () => {
    return (
        <Firebase.Provider>
            <ApolloProvider client={client}>
                <StyletronProvider value={engine}>
                    <BaseProvider theme={NextMovieTheme} zIndex={2}>
                        <App />
                    </BaseProvider>
                </StyletronProvider>
            </ApolloProvider>
        </Firebase.Provider>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));
