import React from 'react';
import { Block } from 'baseui/block';
import { useQuery } from '@apollo/react-hooks';

import { Content } from 'next-movie-components';

import {
    GET_NOW_PLAYING_MOVIES,
    GET_UPCOMING_MOVIES,
    GET_POPULAR_MOVIES,
    GET_POPULAR_TVS
} from '../../apis';
import { Hero } from '../hero';

import {
    PopularMoviesDeck,
    NowPlayingMoviesDeck,
    UpcomingMoviesDeck,
    PopularTvsDeck
} from '../decks';

export const Home = () => {
    const {
        error: errorUpcomingMovies,
        data: dataUpcomingMovies,
        loading: loadingUpcomingMovies
    } = useQuery(GET_UPCOMING_MOVIES);

    const {
        error: errorNowPlayingMovies,
        data: dataNowPlayingMovies,
        loading: loadingNowPlayingMovies
    } = useQuery(GET_NOW_PLAYING_MOVIES);

    const {
        error: errorPopularMovies,
        data: dataPopularMovies,
        loading: loadingPopularMovies
    } = useQuery(GET_POPULAR_MOVIES);

    const {
        error: errorPopularTvs,
        data: dataPopularTvs,
        loading: loadingPopularTvs
    } = useQuery(GET_POPULAR_TVS);

    return (
        <Block>
            <Hero
                data={dataUpcomingMovies}
                error={errorUpcomingMovies}
                loading={loadingUpcomingMovies}
            />
            <Content>
                <NowPlayingMoviesDeck
                    data={dataNowPlayingMovies}
                    error={errorNowPlayingMovies}
                    loading={loadingNowPlayingMovies}
                />
                <Block marginBottom="scale900" />
                <UpcomingMoviesDeck
                    data={dataUpcomingMovies}
                    error={errorUpcomingMovies}
                    loading={loadingUpcomingMovies}
                />
                <Block marginBottom="scale900" />
                <PopularMoviesDeck
                    data={dataPopularMovies}
                    error={errorPopularMovies}
                    loading={loadingPopularMovies}
                />
                <Block marginBottom="scale900" />
                <PopularTvsDeck
                    data={dataPopularTvs}
                    error={errorPopularTvs}
                    loading={loadingPopularTvs}
                />
                <Block marginBottom="scale900" />
            </Content>
        </Block>
    );
};
