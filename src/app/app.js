import React from 'react';

import { CardDeck } from '../card-deck';
import { HeaderNavigation } from '../header-navigation';
import { fixtures } from '../utils';

import logo from './logo.svg';
import './app.css';

export const App = () => {
    return (
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
            <CardDeck name="Popular movies" data={fixtures.movies} />
        </div>
    );
};
