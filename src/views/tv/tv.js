import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Block } from 'baseui/block';

import { Content, Section, P1 } from 'next-movie-components';

import { useQueryTvById } from '../../utils/graphql';
import { Cast, Crew, HeaderTv } from '../../components';
import { WatchlistButton } from '../button';
import { SimilarShowsDeck } from '../decks';

const notEmpty = data => data && data.length > 0;

export const TV = () => {
    const history = useHistory();
    const { id } = useParams();
    const { loading, error, data } = useQueryTvById({
        variables: { id: parseInt(id) }
    });

    if (error) {
        return null;
    }

    const tv = data ? data.tv : null;

    return (
        <Block>
            <HeaderTv
                data={tv}
                loading={loading}
                controls={
                    <WatchlistButton id={parseInt(id)}>
                        Watchlist
                    </WatchlistButton>
                }
            />
            {tv && (
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
                    {notEmpty(tv.similar) && (
                        <SimilarShowsDeck
                            label="Similar TV series"
                            data={tv.similar}
                            onCardClick={(event, id) => {
                                event.stopPropagation();
                                history.push(`/tv/${id}`);
                            }}
                        />
                    )}
                </Content>
            )}
            <Block marginBottom="scale1000" />
        </Block>
    );
};
