import React from 'react';
import { action } from '@storybook/addon-actions';
import { Block } from 'baseui/block';
import { fixtures } from '../../utils';
import { WatchlistButton } from '../button';
import { Page } from '.';

export default {
    title: 'components|Page'
};

export const base = () => (
    <Page>
        <Page.HeaderMovie
            data={fixtures.movie}
            controls={<WatchlistButton>Watchlist</WatchlistButton>}
        />
        <Page.Content>
            <Page.Section label="Overview">
                <Page.Paragraph>{fixtures.movie.overview}</Page.Paragraph>
            </Page.Section>
            <Page.Section label="Featured Crew">
                <Page.Crew data={fixtures.movie.crew} />
            </Page.Section>
            <Page.Section label="Cast">
                <Page.Cast data={fixtures.movie.cast} />
            </Page.Section>
            <Page.Similar
                label="Similar movies"
                data={fixtures.movie.similar}
                onCardClick={action('onCardClick clicked')}
            />
        </Page.Content>
        <Block marginBottom="scale1000" />
    </Page>
);
