import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { FaHeart } from 'react-icons/fa';

import { CardDeck } from '../card-deck';
import { useFetchPopularMovies, useFetchNowPlayingMovies } from './hooks';

const MoviesDeck = ({ label, data, ...rest }) => {
    const history = useHistory();

    return (
        <CardDeck
            {...rest}
            data={data}
            label={
                <Block
                    as="h2"
                    color="colorSecondary"
                    $style={({ $theme }) => ({
                        ...$theme.typography.font550,
                        fontWeight: 'bold'
                    })}
                >
                    {label}
                </Block>
            }
            onCardClick={(event, id) => {
                event.stopPropagation();
                history.push(`/movie/${id}`);
            }}
        />
    );
};

export const NowPlayingMoviesDeck = () => {
    const movies = useFetchNowPlayingMovies();

    // should handle null and []
    if (!movies) {
        return null;
    }

    const data = movies.map(movie => ({
        id: movie.id,
        headerImage: movie.posterImgUrl,
        content: movie.shortReleaseDate
    }));

    return <MoviesDeck label="Now playing" data={data} />;
};

export const PopularMoviesDeck = () => {
    const [, theme] = useStyletron();
    const movies = useFetchPopularMovies();

    // should handle null and []
    if (!movies) {
        return null;
    }

    const data = movies.map(movie => ({
        id: movie.id,
        headerImage: movie.posterImgUrl,
        content: (
            <Block>
                <FaHeart color={theme.colors.colorPrimary} size="0.8em" />{' '}
                {movie.votes}
            </Block>
        )
    }));

    return <MoviesDeck label="Popular movies" data={data} />;
};
