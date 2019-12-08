import React from 'react';
import { Block } from 'baseui/block';
import {
    number,
    string,
    shape,
    func,
    node,
    oneOfType,
    arrayOf
} from 'prop-types';

import { Card, Deck } from 'next-movie-components';

const Meta = ({ title, children }) => (
    <>
        <Block
            color="white"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
        >
            {title}
        </Block>
        <Block>{children}</Block>
    </>
);

export const CardDeck = ({ label, data, onCardClick }) => {
    if (!data || data.length === 0) {
        return null;
    }

    const mapped = data.map(({ id, headerImage, title, children }) => (
        <Card
            key={id}
            headerImage={headerImage}
            title={title}
            onClick={event => {
                onCardClick(event, id);
            }}
        >
            {children}
        </Card>
    ));

    return (
        <Block position="relative">
            {label}
            <Deck>{mapped}</Deck>
        </Block>
    );
};

CardDeck.Meta = Meta;

CardDeck.propTypes = {
    label: node,
    data: arrayOf(
        shape({
            id: number.isRequired,
            headerImage: string.isRequired,
            title: node,
            children: oneOfType([node, arrayOf(node)])
        })
    ).isRequired,
    onCardClick: func.isRequired
};

CardDeck.defaultProps = {
    label: undefined
};
