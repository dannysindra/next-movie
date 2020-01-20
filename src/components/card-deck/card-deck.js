import React from 'react';
import { Block } from 'baseui/block';
import {
    number,
    string,
    shape,
    func,
    node,
    oneOfType,
    arrayOf,
    bool
} from 'prop-types';

import { Card, CARD_KIND, Deck } from 'next-movie-components';

import { CardSkeleton } from './card-skeleton';

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

export const CardDeck = ({ label, loading, data, kind, onCardClick }) => {
    let deck;

    // Render 7 skeleton entries if the data is still being fetched
    if (loading) {
        deck = [0, 1, 2, 3, 4, 5, 6].map(el => (
            <CardSkeleton key={el} kind={kind} />
        ));
    }
    // Do not render anything if there is error
    else if (!data || data.length === 0) {
        return null;
    } else {
        deck = data.map(({ id, headerImage, title, children }) => (
            <Card
                key={id}
                headerImage={headerImage}
                title={title}
                kind={kind}
                onClick={event => {
                    onCardClick(event, id);
                }}
            >
                {children}
            </Card>
        ));
    }

    return (
        <Block position="relative">
            {label}
            <Deck>{deck}</Deck>
        </Block>
    );
};

CardDeck.Meta = Meta;

CardDeck.propTypes = {
    label: node,
    loading: bool,
    data: arrayOf(
        shape({
            id: number.isRequired,
            headerImage: string.isRequired,
            title: node,
            children: oneOfType([node, arrayOf(node)])
        })
    ),
    kind: string,
    onCardClick: func.isRequired
};

CardDeck.defaultProps = {
    label: undefined,
    loading: false,
    data: undefined,
    kind: CARD_KIND.poster
};
