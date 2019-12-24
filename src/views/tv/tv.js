import React from 'react';
import { useHistory } from 'react-router-dom';
import { Block } from 'baseui/block';

import { Content, Section, P1 } from 'next-movie-components';

import { Cast, Crew, HeaderTv, WatchlistButton } from '../../components';
import { SimilarShowsDeck } from '../decks';

import { useFetchTvDetails } from './hooks';

const notEmpty = data => data && data.length > 0;

export const TV = () => {
    const history = useHistory();
    const tv = useFetchTvDetails();

    if (!tv) {
        return null;
    }

    return (
        <Block>
            <HeaderTv
                data={tv}
                controls={<WatchlistButton>Watchlist</WatchlistButton>}
            />
            <Content>
                <Section label="Overview">
                    <P1>{tv.overview}</P1>
                </Section>
                {notEmpty(tv.crew) && (
                    <Section label="Featured Crew">
                        <Crew data={tv.crew} />
                    </Section>
                )}
                {notEmpty(tv.cast) && (
                    <Section label="Cast">
                        <Cast data={tv.cast} />
                    </Section>
                )}
                <SimilarShowsDeck
                    label="Similar TV series"
                    data={tv.similar}
                    onCardClick={(event, id) => {
                        event.stopPropagation();
                        history.push(`/tv/${id}`);
                    }}
                />
            </Content>
            <Block marginBottom="scale1000" />
        </Block>
    );
};
