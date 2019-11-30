import React from 'react';
import { action } from '@storybook/addon-actions';

import { fixtures } from '../../utils';
import { CardDeck } from './card-deck';

const actions = {
    onCardClick: action('onCardClick')
};

export default {
    title: 'components|CardDeck'
};

export const base = () => (
    <CardDeck
        {...actions}
        name="Popular movies"
        data={fixtures.popularMovies}
    />
);
