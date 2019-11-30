import React from 'react';
import { useHistory } from 'react-router-dom';

import { Reel } from '../reel';

import { useFetchUpcomingMovies, useReel } from './hooks';
import { InfoButton } from './info-button';
import { SaveButton } from './watchlist-button';

export const Hero = () => {
    const history = useHistory();
    const movies = useFetchUpcomingMovies();
    const [index, onReelItemClick] = useReel({
        initialIndex: 0,
        numberOfItems: movies.length,
        duration: 7000
    });

    if (!movies) {
        return null;
    }

    const primaryButton = <SaveButton>Watchlist</SaveButton>;

    const secondaryButton = (
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
            primaryButton={primaryButton}
            secondaryButton={secondaryButton}
        />
    );
};
