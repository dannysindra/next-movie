import React from 'react';
import { useHistory } from 'react-router-dom';
import { Block } from 'baseui/block';

import { Page, WatchlistButton } from '../../components';

import { useFetchTvDetails } from './hooks';

export const TV = () => {
    const history = useHistory();
    const tv = useFetchTvDetails();

    if (!tv) {
        return null;
    }

    return (
        <Page>
            <Page.HeaderTv
                data={tv}
                controls={<WatchlistButton>Watchlist</WatchlistButton>}
            />
            <Page.Content>
                <Page.Section label="Overview">
                    <Page.Paragraph>{tv.overview}</Page.Paragraph>
                </Page.Section>
                <Page.Section label="Cast">
                    <Page.Cast data={tv.cast} />
                </Page.Section>
                <Page.Similar
                    label="Similar TV series"
                    data={tv.similar}
                    onCardClick={(event, id) => {
                        event.stopPropagation();
                        history.push(`/tv/${id}`);
                    }}
                />
            </Page.Content>
            <Block marginBottom="scale1000" />
        </Page>
    );
};
