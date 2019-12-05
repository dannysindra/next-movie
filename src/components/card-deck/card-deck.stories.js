import React from 'react';
import { Block } from 'baseui/block';
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
        label={
            <Block
                as="h2"
                color="colorSecondary"
                $style={({ $theme }) => ({
                    ...$theme.typography.font550,
                    fontWeight: 'bold'
                })}
            >
                Popular movies
            </Block>
        }
        data={fixtures.popularMovies}
    />
);
