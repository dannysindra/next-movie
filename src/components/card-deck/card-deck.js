import React from 'react';
import { Block } from 'baseui/block';

import { Card, Deck } from 'next-movie-components';

export const CardDeck = ({ name, data }) => {
    return (
        <Block as="div" className="card-deck" position="relative">
            <Block
                as="h2"
                $style={({ $theme }) => ({
                    ...$theme.typography.font550,
                    color: $theme.colors.colorSecondary,
                    fontWeight: 'bold'
                })}
            >
                {name}
            </Block>
            <Deck>
                {data.map(({ id, headerImage, content }) => (
                    <Card key={id} headerImage={headerImage} title={content} />
                ))}
            </Deck>
        </Block>
    );
};
