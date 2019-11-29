import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '../../redux';
import { HeaderNavigation } from '../header-navigation';
import { Hero } from '../hero';
import { PopularMovies } from '../popular-movies';

import './app.css';

export const App = () => {
    return (
        <ReduxProvider store={store}>
            <div className="App">
                <HeaderNavigation />
                <Hero />
                <div className="App-content">
                    <PopularMovies />
                </div>
            </div>
        </ReduxProvider>
    );
};
