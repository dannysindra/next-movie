import React from 'react';
import { Block } from 'baseui/block';

import { Page } from '../../components';

import { Hero } from '../hero';

import {
    PopularMoviesDeck,
    NowPlayingMoviesDeck,
    UpcomingMoviesDeck,
    PopularTvsDeck
} from '../decks';

export const Home = () => {
    return (
        <Page>
            <Hero />
            <Page.Content>
                <NowPlayingMoviesDeck />
                <Block marginBottom="scale900" />
                <UpcomingMoviesDeck />
                <Block marginBottom="scale900" />
                <PopularMoviesDeck />
                <Block marginBottom="scale900" />
                <PopularTvsDeck />
                <Block marginBottom="scale900" />
            </Page.Content>
        </Page>
    );
};
