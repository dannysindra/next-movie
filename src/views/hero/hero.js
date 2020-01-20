import React from 'react';
import { Block } from 'baseui/block';
import { useHistory } from 'react-router-dom';
import { arrayOf, shape } from 'prop-types';

import { HERO_TOTAL_ITEMS } from '../../constants';
import { InfoButton, WatchlistButton, Reel } from '../../components';

import { useReel } from './hooks';

const hasAllImages = movie =>
    movie.backdropImgUrl.small &&
    movie.backdropImgUrl.original &&
    movie.posterImgUrl.medium &&
    movie.posterImgUrl.larger;

export const Hero = ({ error, data }) => {
    const history = useHistory();
    const [index, onReelItemClick] = useReel({
        initialIndex: 0,
        numberOfItems: HERO_TOTAL_ITEMS,
        duration: 7000
    });
    let entries;

    if (error) {
        return null;
    }

    if (data && data.upcomingMovies.length > 0) {
        entries = data.upcomingMovies
            .filter(hasAllImages)
            .slice(0, HERO_TOTAL_ITEMS);
    }

    const watchlistButton = <WatchlistButton>Watchlist</WatchlistButton>;

    const infoButton = (
        <InfoButton
            onClick={event => {
                event.stopPropagation();
                history.push(`/movie/${entries[index].id}`);
            }}
        >
            More Info
        </InfoButton>
    );

    return (
        <Reel
            index={index}
            movies={entries}
            onReelItemClick={onReelItemClick}
            controls={
                <>
                    {watchlistButton}
                    <Block display="inline" marginRight="scale600" />
                    {infoButton}
                </>
            }
        />
    );
};

Hero.propTypes = {
    data: arrayOf(shape({})),
    error: shape({})
};

Hero.defaultProps = {
    data: undefined,
    error: undefined
};
