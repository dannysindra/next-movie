import React from 'react';
import { Block } from 'baseui/block';
import { number, string, shape, func, node, arrayOf } from 'prop-types';

import { Card, Deck } from 'next-movie-components';

export const CardDeck = ({ label, data, onCardClick }) => {
    if (!data || data.length === 0) {
        return null;
    }

    const mapped = data.map(({ id, headerImage, content }) => (
        <Card
            key={id}
            headerImage={headerImage}
            title={content}
            onClick={event => {
                onCardClick(event, id);
            }}
        />
    ));

    return (
        <Block position="relative" marginBottom="scale1000">
            {label}
            <Deck>{mapped}</Deck>
        </Block>
    );
};

CardDeck.propTypes = {
    label: node,
    data: arrayOf(
        shape({
            id: number.isRequired,
            headerImage: string.isRequired,
            content: node
        })
    ).isRequired,
    onCardClick: func.isRequired
};

CardDeck.defaultProps = {
    label: undefined
};
