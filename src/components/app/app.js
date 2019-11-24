import React from 'react';

import { CardDeck } from '../card-deck';
import { HeaderNavigation } from '../header-navigation';
import { Reel } from '../reel';

import './app.css';

export const App = () => {
    return (
        <div className="App">
            <HeaderNavigation />
            <Reel movies={[]} onClickAdd={() => {}} onClickMore={() => {}} />
            <div className="App-content">
                <CardDeck name="Popular movies" data={[]} />
            </div>
        </div>
    );
};
