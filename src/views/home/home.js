import React from 'react';
import { Block } from 'baseui/block';

import { Content } from 'next-movie-components';

import {
    useQueryNowPlayingMovies,
    useQueryPopularMovies,
    useQueryUpcomingMovies,
    useQueryPopularTvs
} from '../../utils/graphql';

import { Hero } from './hero';

import {
    PopularMoviesDeck,
    NowPlayingMoviesDeck,
    UpcomingMoviesDeck,
    PopularTvsDeck
} from '../decks';

export const Home = () => {
    const upcomingMovies = useQueryUpcomingMovies();
    const nowPlayingMovies = useQueryNowPlayingMovies();
    const popularMovies = useQueryPopularMovies();
    const popularTvs = useQueryPopularTvs();

    return (
        <Block>
            <Hero {...upcomingMovies} />
            <Content>
                <NowPlayingMoviesDeck {...nowPlayingMovies} />
                <Block marginBottom="scale900" />
                <UpcomingMoviesDeck {...upcomingMovies} />
                <Block marginBottom="scale900" />
                <PopularMoviesDeck {...popularMovies} />
                <Block marginBottom="scale900" />
                <PopularTvsDeck {...popularTvs} />
                <Block marginBottom="scale900" />
            </Content>
        </Block>
    );
};
