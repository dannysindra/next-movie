import React from 'react';
import { Grid, Cell } from 'baseui/layout-grid';
import { useHistory } from 'react-router-dom';

import { Content, H3, P1 } from 'next-movie-components';

import { useAuth } from '../../utils/auth';
import { useQueryWatchlistEntries } from '../../utils/graphql';

import { Root, Entry, EntrySkeleton } from './styled';

export const Watchlist = () => {
    const { isLoggedIn } = useAuth();
    const { data, error, loading } = useQueryWatchlistEntries({
        fetchPolicy: 'network-only',
        skip: !isLoggedIn
    });
    const history = useHistory();

    if (!isLoggedIn || error) {
        return null;
    }

    let entries;

    if (loading) {
        entries = [0, 1, 2, 3, 4, 5].map(entry => (
            <Cell key={entry} span={2}>
                <EntrySkeleton />
            </Cell>
        ));
    } else {
        entries = data.watchlistEntries.results.map(entry => (
            <Cell key={entry.id} span={2}>
                <Entry
                    headerImage={entry.backdropImgUrl.small}
                    title={entry.title}
                    onClick={event => {
                        event.stopPropagation();
                        history.push(`/movie/${entry.id}`);
                    }}
                />
            </Cell>
        ));
    }

    return (
        <Root>
            <Content>
                <H3>My Watchlist</H3>
                {entries && entries.length > 0 ? (
                    <Grid
                        gridGutters={0}
                        gridMargins={0}
                        overrides={{
                            Grid: {
                                style: {
                                    marginLeft: 0,
                                    marginRight: 0
                                }
                            }
                        }}
                    >
                        {entries}
                    </Grid>
                ) : (
                    <P1>There is no movie added to your watchlist yet.</P1>
                )}
            </Content>
        </Root>
    );
};
