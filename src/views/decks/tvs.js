import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyletron } from 'baseui';
import { FaHeart } from 'react-icons/fa';

import { CardDeck } from '../../components';

import { useFetchPopularTvs } from './hooks';
import { Header, Meta } from './styled';
import { hasAllImages } from './utils';

export const PopularTvsDeck = () => {
    const history = useHistory();
    const [, theme] = useStyletron();
    const tvs = useFetchPopularTvs();

    // should handle null and []
    if (!tvs) {
        return null;
    }

    const data = tvs.filter(hasAllImages).map(tv => ({
        id: tv.id,
        headerImage: tv.thumbnailImgUrl,
        children: (
            <Meta title={tv.name}>
                <FaHeart color={theme.colors.colorPrimary} size="0.8em" />{' '}
                {tv.votes}
            </Meta>
        )
    }));

    return (
        <CardDeck
            data={data}
            label={<Header>Popular TV series</Header>}
            onCardClick={(event, id) => {
                event.stopPropagation();
                history.push(`/tv/${id}`);
            }}
        />
    );
};
