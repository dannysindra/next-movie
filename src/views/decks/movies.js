import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyletron } from 'baseui';
import { FaHeart } from 'react-icons/fa';

import { HERO_TOTAL_ITEMS } from '../../constants';
import { CardDeck } from '../../components';

import { Header, Meta } from './styled';
import { hasAllImages } from './utils';
import {
    useFetchNowPlayingMovies,
    useFetchPopularMovies,
    useFetchUpcomingMovies
} from './hooks';

export const NowPlayingMoviesDeck = () => {
    const history = useHistory();
    const movies = useFetchNowPlayingMovies();

    // should handle null and []
    if (!movies) {
        return null;
    }

    const data = movies.filter(hasAllImages).map(movie => ({
        id: movie.id,
        headerImage: movie.posterImgUrl,
        title: movie.shortReleaseDate
    }));

    return (
        <CardDeck
            label={<Header>Now playing</Header>}
            data={data}
            onCardClick={(event, id) => {
                event.stopPropagation();
                history.push(`/movie/${id}`);
            }}
        />
    );
};

export const UpcomingMoviesDeck = () => {
    const history = useHistory();
    const movies = useFetchUpcomingMovies();

    // should handle null and []
    if (!movies) {
        return null;
    }

    const data = movies
        .filter(hasAllImages)
        .slice(HERO_TOTAL_ITEMS, movies.length)
        .map(movie => ({
            id: movie.id,
            headerImage: movie.thumbnailImgUrl,
            children: <Meta title={movie.title}>{movie.releaseDate}</Meta>
        }));

    return (
        <CardDeck
            label={<Header>Upcoming movies</Header>}
            data={data}
            onCardClick={(event, id) => {
                event.stopPropagation();
                history.push(`/movie/${id}`);
            }}
        />
    );
};

export const PopularMoviesDeck = () => {
    const history = useHistory();
    const [, theme] = useStyletron();
    const movies = useFetchPopularMovies();

    // should handle null and []
    if (!movies) {
        return null;
    }

    const data = movies.filter(hasAllImages).map(movie => ({
        id: movie.id,
        headerImage: movie.thumbnailImgUrl,
        children: (
            <Meta title={movie.title}>
                <FaHeart color={theme.colors.colorPrimary} size="0.8em" />{' '}
                {movie.votes}
            </Meta>
        )
    }));

    return (
        <CardDeck
            label={<Header>Popular movies</Header>}
            data={data}
            onCardClick={(event, id) => {
                event.stopPropagation();
                history.push(`/movie/${id}`);
            }}
        />
    );
};
