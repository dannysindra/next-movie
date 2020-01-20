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

export const NowPlayingMoviesDeck = ({ loading, data, error }) => {
    const history = useHistory();
    let entries;

    if (error) {
        return null;
    }

    if (data && data.nowPlayingMovies) {
        entries = data.nowPlayingMovies.filter(hasAllImages).map(movie => ({
            id: movie.id,
            headerImage: movie.posterImgUrl.medium,
            title: movie.shortReleaseDate
        }));
    }

    return (
        <CardDeck
            label={<H3>Now playing</H3>}
            loading={loading}
            data={entries}
            onCardClick={(event, id) => {
                event.stopPropagation();
                history.push(`/movie/${id}`);
            }}
        />
    );
};

export const UpcomingMoviesDeck = ({ loading, data, error }) => {
    const history = useHistory();
    let entries;

    if (error) {
        return null;
    }

    if (data && data.upcomingMovies) {
        entries = data.upcomingMovies
            .filter(hasAllImages)
            .slice(HERO_TOTAL_ITEMS, data.upcomingMovies.length)
            .map(movie => ({
                id: movie.id,
                headerImage: movie.backdropImgUrl.small,
                children: <Meta title={movie.title}>{movie.releaseDate}</Meta>
            }));
    }

    return (
        <CardDeck
            label={<H3>Upcoming movies</H3>}
            loading={loading}
            data={entries}
            kind={CARD_KIND.thumbnail}
            onCardClick={(event, id) => {
                event.stopPropagation();
                history.push(`/movie/${id}`);
            }}
        />
    );
};

export const PopularMoviesDeck = ({ loading, data, error }) => {
    const history = useHistory();
    const [, theme] = useStyletron();
    let entries;

    if (error) {
        return null;
    }

    if (data && data.popularMovies) {
        entries = data.popularMovies.filter(hasAllImages).map(movie => ({
            id: movie.id,
            headerImage: movie.backdropImgUrl.small,
            children: (
                <Meta title={movie.title}>
                    <FaHeart color={theme.colors.colorPrimary} size="0.8em" />{' '}
                    {movie.votes}
                </Meta>
            )
        }));
    }

    return (
        <CardDeck
            label={<H3>Popular movies</H3>}
            loading={loading}
            data={entries}
            kind={CARD_KIND.thumbnail}
            onCardClick={(event, id) => {
                event.stopPropagation();
                history.push(`/movie/${id}`);
            }}
        />
    );
};

export const PopularTvsDeck = ({ loading, data, error }) => {
    const history = useHistory();
    const [, theme] = useStyletron();
    let entries;

    if (error) {
        return null;
    }

    if (data && data.popularTvs) {
        entries = data.popularTvs.filter(hasAllImages).map(tv => ({
            id: tv.id,
            headerImage: tv.backdropImgUrl.small,
            children: (
                <Meta title={tv.name}>
                    <FaHeart color={theme.colors.colorPrimary} size="0.8em" />{' '}
                    {tv.votes}
                </Meta>
            )
        }));
    }

    return (
        <CardDeck
            data={entries}
            loading={loading}
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

    if (!data || data.length === 0) {
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
