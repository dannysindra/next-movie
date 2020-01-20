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
    const { error: errorUpcomingMovies, data: dataUpcomingMovies } = useQuery(
        GET_UPCOMING_MOVIES
    );
    const {
        error: errorNowPlayingMovies,
        data: dataNowPlayingMovies
    } = useQuery(GET_NOW_PLAYING_MOVIES);
    const { error: errorPopularMovies, data: dataPopularMovies } = useQuery(
        GET_POPULAR_MOVIES
    );
    const { error: errorPopularTvs, data: dataPopularTvs } = useQuery(
        GET_POPULAR_TVS
    );

    return (
        <Block>
            <Hero error={errorUpcomingMovies} data={dataUpcomingMovies} />
            <Content>
                <NowPlayingMoviesDeck
                    data={dataNowPlayingMovies}
                    error={errorNowPlayingMovies}
                />
                <Block marginBottom="scale900" />
                <UpcomingMoviesDeck
                    data={dataUpcomingMovies}
                    error={errorUpcomingMovies}
                />
                <Block marginBottom="scale900" />
                <PopularMoviesDeck
                    data={dataPopularMovies}
                    error={errorPopularMovies}
                />
                <Block marginBottom="scale900" />
                <PopularTvsDeck data={dataPopularTvs} error={errorPopularTvs} />
                <Block marginBottom="scale900" />
            </Content>
        </Block>
    );
};
