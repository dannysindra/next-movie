import React from 'react';
import { Block } from 'baseui/block';

import { Content } from 'next-movie-components';

import { Hero } from '../hero';

import {
    PopularMoviesDeck,
    NowPlayingMoviesDeck,
    UpcomingMoviesDeck,
    PopularTvsDeck
} from '../decks';

export const Home = () => {
    return (
        <Block>
            <Hero />
            <Content>
                <NowPlayingMoviesDeck />
                <Block marginBottom="scale900" />
                <UpcomingMoviesDeck />
                <Block marginBottom="scale900" />
                <PopularMoviesDeck />
                <Block marginBottom="scale900" />
                <PopularTvsDeck />
                <Block marginBottom="scale900" />
            </Content>
        </Block>
    );
};
