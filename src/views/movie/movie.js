import React, { useState } from 'react';
import { Block } from 'baseui/block';

import { Content, Section, P1 } from 'next-movie-components';

import { useModal } from '../../hooks';

import { Cast, Crew, HeaderMovie, Review, ReviewModal } from '../../components';
import { WatchlistButton } from '../watchlist-button';
import { SimilarShowsDeck } from '../decks';

import { useMovie } from './hooks';

const notEmpty = data => data && data.length > 0;

export const Movie = () => {
    const [result, navigateTo] = useMovie();
    const [review, setReview] = useState(null);
    const { isOpen, onOpen, onClose } = useModal();

    const { id, data, error, loading } = result;

    if (loading) {
        return (
            <Block>
                <HeaderMovie loading={loading} />
            </Block>
        );
    }

    if (error || !data || !data.movie) {
        return null;
    }

    const { overview, crew, cast, reviews, similar } = data.movie;

    return (
        <>
            <ReviewModal
                isOpen={isOpen}
                onClose={onClose}
                header={review ? `Review by ${review.author}` : ''}
                body={review ? review.content : ''}
            />
            <Block>
                <HeaderMovie
                    data={data.movie}
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
                    {notEmpty(reviews) && (
                        <Section label="Reviews">
                            <Review
                                data={reviews}
                                onClickReview={(event, review) => {
                                    event.stopPropagation();
                                    setReview(review);
                                    onOpen();
                                }}
                            />
                        </Section>
                    )}
                    {notEmpty(similar) && (
                        <SimilarShowsDeck
                            label="Similar movies"
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
        </>
    );
};
