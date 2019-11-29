import React from 'react';

import { CardDeck } from '../card-deck';
import { useFetchPopularMovies } from './hooks';

export const PopularMovies = () => {
    const movies = useFetchPopularMovies();

    if (!movies) {
        return null;
    }

    const data = movies.map(movie => ({
        id: movie.id,
        content: movie.releaseDate,
        headerImage: movie.posterImgUrl
    }));

    return <CardDeck name="Popular movies" data={data} />;
};
