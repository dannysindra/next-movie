import React from 'react';
import { Block } from 'baseui/block';
import { arrayOf, shape } from 'prop-types';

import { HERO_TOTAL_ITEMS } from '../../constants';
import { Reel } from '../../components';
import { InfoButton, WatchlistButton } from '../button';

import { useReel } from './hooks';

const hasAllImages = movie =>
    movie.backdropImgUrl.small &&
    movie.backdropImgUrl.original &&
    movie.posterImgUrl.medium &&
    movie.posterImgUrl.larger;

export const Hero = ({ loading, error, data }) => {
    const [index, onReelItemClick] = useReel({
        initialIndex: 0,
        numberOfItems: HERO_TOTAL_ITEMS,
        duration: 7000
    });
    let entries;
    let controls;

    if (error) {
        return null;
    }

    if (data && data.upcomingMovies.length > 0) {
        entries = data.upcomingMovies
            .filter(hasAllImages)
            .slice(0, HERO_TOTAL_ITEMS);

        controls = (
            <>
                <InfoButton id={entries[index].id} kind="movie">
                    More Info
                </InfoButton>
                <Block display="inline" marginRight="scale600" />
                <WatchlistButton id={entries[index].id}>
                    Watchlist
                </WatchlistButton>
            </>
        );
    }

    return (
        <Reel
            loading={loading}
            index={index}
            movies={entries}
            onReelItemClick={onReelItemClick}
            controls={controls}
        />
    );
};

Hero.propTypes = {
    data: shape({
        upcomingMovies: arrayOf(shape({}))
    }),
    error: shape({})
};

Hero.defaultProps = {
    data: undefined,
    error: undefined
};
