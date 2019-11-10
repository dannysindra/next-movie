import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';

import { NextMovieTheme } from 'next-movie-components';

import { HeaderNavigation } from '../header-navigation';

import logo from './logo.svg';
import './app.css';

const engine = new Styletron();

export const App = () => {
    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={NextMovieTheme}>
                <div className="App">
                    <HeaderNavigation />
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </BaseProvider>
        </StyletronProvider>
    );
};
