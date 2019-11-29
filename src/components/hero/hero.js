import React from 'react';

import { Reel } from '../reel';

import { useFetchUpcomingMovies, useReel } from './hooks';
import { InfoButton } from './info-button';
import { SaveButton } from './watchlist-button';

export const Hero = () => {
    const movies = useFetchUpcomingMovies();
    const [index, onReelItemClick] = useReel({
        initialIndex: 0,
        numberOfItems: movies.length,
        duration: 7000
    });

    if (!movies) {
        return null;
    }

    return (
        <Reel
            index={index}
            movies={movies}
            onReelItemClick={onReelItemClick}
            primaryButton={<SaveButton>Watchlist</SaveButton>}
            secondaryButton={<InfoButton>More Info</InfoButton>}
        />
    );
};
