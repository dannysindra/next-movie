import React from 'react';
import { useHistory } from 'react-router-dom';
import { Block } from 'baseui/block';

import { Page, WatchlistButton } from '../../components';

import { useFetchMovieDetails } from './hooks';

const notEmpty = data => data && data.length > 0;

export const Movie = () => {
    const history = useHistory();
    const movie = useFetchMovieDetails();

    if (!movie) {
        return null;
    }

    return (
        <Page>
            <Page.HeaderMovie
                data={movie}
                controls={<WatchlistButton>Watchlist</WatchlistButton>}
            />
            <Page.Content>
                <Page.Section label="Overview">
                    <Page.Paragraph>{movie.overview}</Page.Paragraph>
                </Page.Section>
                {notEmpty(movie.crew) && (
                    <Page.Section label="Featured Crew">
                        <Page.Crew data={movie.crew} />
                    </Page.Section>
                )}
                {notEmpty(movie.cast) && (
                    <Page.Section label="Cast">
                        <Page.Cast data={movie.cast} />
                    </Page.Section>
                )}
                <Page.Similar
                    label="Similar movies"
                    data={movie.similar}
                    onCardClick={(event, id) => {
                        event.stopPropagation();
                        history.push(`/movie/${id}`);
                    }}
                />
            </Page.Content>
            <Block marginBottom="scale1000" />
        </Page>
    );
};
