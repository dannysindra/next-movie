import React from 'react';
import { Block } from 'baseui/block';
import { action } from '@storybook/addon-actions';

import { CARD_KIND } from 'next-movie-components';

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
        kind={CARD_KIND.poster}
    />
);

export const loading = () => (
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
        data={[]}
        kind={CARD_KIND.poster}
    />
);
