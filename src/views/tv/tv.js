import React from 'react';
import { Block } from 'baseui/block';

import { Content, Section, P1 } from 'next-movie-components';

import { Cast, Crew, HeaderTv } from '../../components';
import { SimilarShowsDeck } from '../decks';
import { WatchlistButton } from '../watchlist-button';

import { useTv } from './hooks';

const notEmpty = data => data && data.length > 0;

export const TV = () => {
    const [result, navigateTo] = useTv();
    const { id, data, error, loading } = result;

    if (loading) {
        return (
            <Block>
                <HeaderTv loading={loading} />
            </Block>
        );
    }

    if (error || !data || !data.tv) {
        return null;
    }

    const { overview, crew, cast, similar } = data.tv;

    return (
        <Block>
            <HeaderTv
                data={data.tv}
                controls={
                    <WatchlistButton id={parseInt(id)}>
                        Watchlist
                    </WatchlistButton>
                }
            />
            <Content>
                <Section label="Overview">
                    <P1>{overview}</P1>
                </Section>
                {notEmpty(crew) && (
                    <Section label="Featured Crew">
                        <Crew data={crew} />
                    </Section>
                )}
                {notEmpty(cast) && (
                    <Section label="Cast">
                        <Cast data={cast} />
                    </Section>
                )}
                {notEmpty(similar) && (
                    <SimilarShowsDeck
                        label="Similar TV series"
                        data={similar}
                        onCardClick={(event, id) => {
                            event.stopPropagation();
                            navigateTo(id);
                        }}
                    />
                )}
            </Content>
            <Block marginBottom="scale1000" />
        </Block>
    );
};
