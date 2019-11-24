import React from 'react';

import { fixtures } from '../../utils';
import { CardDeck } from './card-deck';

export default {
    title: 'CardDeck'
};

export const base = () => (
    <CardDeck name="Popular movies" data={fixtures.popularMovies} />
);
