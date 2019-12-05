import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { FaHeart } from 'react-icons/fa';

import { CardDeck } from '../card-deck';

import { Section } from './styled';

export const MovieSimilar = ({ label, data }) => {
    const [, theme] = useStyletron();
    const history = useHistory();

    if (!data) {
        return null;
    }

    const mapped = data.map(datum => ({
        id: datum.id,
        headerImage: datum.posterImgUrl,
        content: (
            <Block>
                <FaHeart color={theme.colors.colorPrimary} size="0.8em" />{' '}
                {datum.votes}
            </Block>
        )
    }));

    return (
        <CardDeck
            label={<Section.H>{label}</Section.H>}
            data={mapped}
            onCardClick={(event, id) => {
                event.stopPropagation();
                history.push(`/movie/${id}`);
            }}
        />
    );
};
