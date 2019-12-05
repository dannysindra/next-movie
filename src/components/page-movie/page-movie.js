import React from 'react';

import { Page } from '../page';
import { MovieHeader, MovieSection, MovieSimilar } from '../movie';
import { WatchlistButton } from '../button';

import { useFetchMovieDetails } from './hooks';

export const PageMovie = () => {
    const movie = useFetchMovieDetails();

    if (!movie) {
        return null;
    }

    return (
        <Page>
            <MovieHeader
                data={movie}
                controls={<WatchlistButton>Watchlist</WatchlistButton>}
            />
            <Page.Content>
                <MovieSection label="Overview" data={movie.overview} />
                <MovieSimilar label="Similar movies" data={movie.similar} />
            </Page.Content>
        </Page>
    );
};
