import React from 'react';
import { Block } from 'baseui/block';

import { Content } from 'next-movie-components';

import {
    useQueryNowPlayingMovies,
    useQueryPopularMovies,
    useQueryUpcomingMovies,
    useQueryPopularTvs
} from '../../utils/graphql';

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
    } = useQueryUpcomingMovies();

    const {
        error: errorNowPlayingMovies,
        data: dataNowPlayingMovies,
        loading: loadingNowPlayingMovies
    } = useQueryNowPlayingMovies();

    const {
        error: errorPopularMovies,
        data: dataPopularMovies,
        loading: loadingPopularMovies
    } = useQueryPopularMovies();

    const {
        error: errorPopularTvs,
        data: dataPopularTvs,
        loading: loadingPopularTvs
    } = useQueryPopularTvs();

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
