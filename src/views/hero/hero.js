import React from 'react';
import { useHistory } from 'react-router-dom';
import { Block } from 'baseui/block';
import { useQuery } from '@apollo/react-hooks';

import { GET_UPCOMING_MOVIES } from '../../apis';
import { HERO_TOTAL_ITEMS } from '../../constants';
import { InfoButton, WatchlistButton, Reel } from '../../components';

import { useReel } from './hooks';

const hasAllImages = movie =>
    movie.backdropImgUrl.small &&
    movie.backdropImgUrl.original &&
    movie.posterImgUrl.medium &&
    movie.posterImgUrl.larger;

export const Hero = () => {
    const history = useHistory();
    const { loading, error, data } = useQuery(GET_UPCOMING_MOVIES);
    const [index, onReelItemClick] = useReel({
        initialIndex: 0,
        numberOfItems: HERO_TOTAL_ITEMS,
        duration: 7000
    });

    if (loading || error || !data || data.upcomingMovies.length === 0) {
        return null;
    }

    const { upcomingMovies: result } = data;
    const movies = result.filter(hasAllImages).slice(0, HERO_TOTAL_ITEMS);

    const watchlistButton = <WatchlistButton>Watchlist</WatchlistButton>;

    const infoButton = (
        <InfoButton
            onClick={event => {
                event.stopPropagation();
                history.push(`/movie/${movies[index].id}`);
            }}
        >
            More Info
        </InfoButton>
    );

    return (
        <Reel
            index={index}
            movies={movies}
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
