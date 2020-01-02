import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { FaHeart } from 'react-icons/fa';
import { useQuery } from '@apollo/react-hooks';

import { H2, H3, CARD_KIND } from 'next-movie-components';

import {
    GET_NOW_PLAYING_MOVIES,
    GET_UPCOMING_MOVIES,
    GET_POPULAR_MOVIES,
    GET_POPULAR_TVS
} from '../../apis';
import { HERO_TOTAL_ITEMS } from '../../constants';
import { CardDeck } from '../../components';

import { Meta } from './styled';
import { hasAllImages } from './utils';

export const NowPlayingMoviesDeck = () => {
    const history = useHistory();
    const { loading, error, data } = useQuery(GET_NOW_PLAYING_MOVIES);

    // should handle null and []
    if (loading || error || !data) {
        return null;
    }

    const { nowPlayingMovies: movies } = data;

    const entries = movies.filter(hasAllImages).map(movie => ({
        id: movie.id,
        headerImage: movie.posterImgUrl.medium,
        title: movie.shortReleaseDate
    }));

    return (
        <CardDeck
            label={<H3>Now playing</H3>}
            data={entries}
            onCardClick={(event, id) => {
                event.stopPropagation();
                history.push(`/movie/${id}`);
            }}
        />
    );
};

export const UpcomingMoviesDeck = () => {
    const history = useHistory();
    const { loading, error, data } = useQuery(GET_UPCOMING_MOVIES);

    // should handle null and []
    if (loading || error || !data) {
        return null;
    }

    const { upcomingMovies: movies } = data;

    const entries = movies
        .filter(hasAllImages)
        .slice(HERO_TOTAL_ITEMS, movies.length)
        .map(movie => ({
            id: movie.id,
            headerImage: movie.backdropImgUrl.small,
            children: <Meta title={movie.title}>{movie.releaseDate}</Meta>
        }));

    return (
        <CardDeck
            label={<H3>Upcoming movies</H3>}
            data={entries}
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
    const { loading, error, data } = useQuery(GET_POPULAR_MOVIES);

    // should handle null and []
    if (loading || error || !data) {
        return null;
    }

    const { popularMovies: movies } = data;

    const entries = movies.filter(hasAllImages).map(movie => ({
        id: movie.id,
        headerImage: movie.backdropImgUrl.small,
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
            data={entries}
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
    const { loading, error, data } = useQuery(GET_POPULAR_TVS);

    // should handle null and []
    if (loading || error || !data) {
        return null;
    }

    const { popularTvs: tvs } = data;

    const entries = tvs.filter(hasAllImages).map(tv => ({
        id: tv.id,
        headerImage: tv.backdropImgUrl.small,
        children: (
            <Meta title={tv.name}>
                <FaHeart color={theme.colors.colorPrimary} size="0.8em" />{' '}
                {tv.votes}
            </Meta>
        )
    }));

    return (
        <CardDeck
            data={entries}
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
            headerImage: datum.posterImgUrl.medium,
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
