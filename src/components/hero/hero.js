import React from 'react';
import { useHistory } from 'react-router-dom';
import { Block } from 'baseui/block';

import { useFetchUpcomingMovies, useReel } from './hooks';
import { InfoButton, WatchlistButton } from '../button';

import { Reel } from './reel';

export const Hero = () => {
    const history = useHistory();
    const movies = useFetchUpcomingMovies();
    const [index, onReelItemClick] = useReel({
        initialIndex: 0,
        numberOfItems: movies.length,
        duration: 7000
    });

    if (!movies || movies.length === 0) {
        return null;
    }

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
