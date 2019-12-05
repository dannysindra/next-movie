import React from 'react';

import { Page } from '../page';
import { Hero } from '../hero';
import { PopularMoviesDeck, NowPlayingMoviesDeck } from '../movies-deck';

export const PageHome = () => {
    return (
        <Page>
            <Hero />
            <Page.Content>
                <NowPlayingMoviesDeck />
                <PopularMoviesDeck />
            </Page.Content>
        </Page>
    );
};
