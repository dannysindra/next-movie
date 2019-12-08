import React from 'react';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { FaHeart } from 'react-icons/fa';

import { CardDeck } from '../card-deck';

import { Heading } from './styled/common';

export const Similar = ({ label, data, onCardClick }) => {
    const [, theme] = useStyletron();

    if (!data) {
        return null;
    }

    const mapped = data
        .filter(datum => datum.posterImgUrl !== '')
        .map(datum => ({
            id: datum.id,
            headerImage: datum.posterImgUrl,
            title: (
                <Block>
                    <FaHeart color={theme.colors.colorPrimary} size="0.8em" />{' '}
                    {datum.votes}
                </Block>
            )
        }));

    return (
        <CardDeck
            label={<Heading>{label}</Heading>}
            data={mapped}
            onCardClick={onCardClick}
        />
    );
};
