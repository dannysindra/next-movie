import React from 'react';
import { useHistory } from 'react-router-dom';

import { CardDeck } from '../card-deck';
import { useFetchPopularMovies } from './hooks';

export const MoviesPopular = () => {
    const movies = useFetchPopularMovies();
    const history = useHistory();

    if (!movies) {
        return null;
    }

    const data = movies.map(movie => ({
        id: movie.id,
        content: movie.releaseDate,
        headerImage: movie.posterImgUrl
    }));

    return (
        <CardDeck
            data={data}
            name="Popular movies"
            onCardClick={(event, id) => {
                event.stopPropagation();
                history.push(`/movie/${id}`);
            }}
        />
    );
};
