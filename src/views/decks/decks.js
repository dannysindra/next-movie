import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { FaHeart } from 'react-icons/fa';

import { H2, H3, CARD_KIND } from 'next-movie-components';

import { HERO_TOTAL_ITEMS } from '../../constants';
import { CardDeck } from '../../components';

import { Meta } from './styled';
import { hasAllImages } from './utils';
import {
    useFetchNowPlayingMovies,
    useFetchPopularMovies,
    useFetchUpcomingMovies,
    useFetchPopularTvs
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
            label={<H3>Now playing</H3>}
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
            label={<H3>Upcoming movies</H3>}
            data={data}
            kind={CARD_KIND.thumbnail}
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
            label={<H3>Popular movies</H3>}
            data={data}
            kind={CARD_KIND.thumbnail}
            onCardClick={(event, id) => {
                event.stopPropagation();
                history.push(`/movie/${id}`);
            }}
        />
    );
};

export const PopularTvsDeck = () => {
    const history = useHistory();
    const [, theme] = useStyletron();
    const tvs = useFetchPopularTvs();

    // should handle null and []
    if (!tvs) {
        return null;
    }

    const data = tvs.filter(hasAllImages).map(tv => ({
        id: tv.id,
        headerImage: tv.thumbnailImgUrl,
        children: (
            <Meta title={tv.name}>
                <FaHeart color={theme.colors.colorPrimary} size="0.8em" />{' '}
                {tv.votes}
            </Meta>
        )
    }));

    return (
        <CardDeck
            data={data}
            label={<H3>Popular TV series</H3>}
            kind={CARD_KIND.thumbnail}
            onCardClick={(event, id) => {
                event.stopPropagation();
                history.push(`/tv/${id}`);
            }}
        />
    );
};

export const SimilarShowsDeck = ({ label, data, onCardClick }) => {
    const [, theme] = useStyletron();

    if (!data) {
        return null;
    }

    const mapped = data
        .filter(datum => datum.posterImgUrl !== '')
        .map(datum => ({
            id: datum.id,
            headerImage: datum.posterImgUrl,
            title: (
                <Block>
                    <FaHeart color={theme.colors.colorPrimary} size="0.8em" />{' '}
                    {datum.votes}
                </Block>
            )
        }));

    return (
        <CardDeck
            label={<H2>{label}</H2>}
            data={mapped}
            onCardClick={onCardClick}
        />
    );
};
