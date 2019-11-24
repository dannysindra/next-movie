import React from 'react';
import { action } from '@storybook/addon-actions';

import { CardDeck } from '../card-deck';
import { HeaderNavigation } from '../header-navigation';
import { Reel } from '../reel';
import { fixtures } from '../../utils';

import './app.css';

const reelActions = {
    onClickAdd: action('clicked Add to Watchlist'),
    onClickMore: action('clicked More Info')
};

export default {
    title: 'App'
};

export const base = () => (
    <div className="App">
        <HeaderNavigation />
        <Reel {...reelActions} movies={fixtures.upcomingMovies} />
        <div className="App-content">
            <CardDeck name="Popular movies" data={fixtures.popularMovies} />
        </div>
    </div>
);
