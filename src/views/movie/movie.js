import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Block } from 'baseui/block';
import { useQuery } from '@apollo/react-hooks';

import { Content, Section, P1 } from 'next-movie-components';

import { GET_MOVIE_BY_ID } from '../../apis';
import { Cast, Crew, HeaderMovie, Review, ReviewModal } from '../../components';
import { useModal } from '../../hooks';
import { WatchlistButton } from '../button';
import { SimilarShowsDeck } from '../decks';

const notEmpty = data => data && data.length > 0;

export const Movie = () => {
    const history = useHistory();
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_MOVIE_BY_ID, {
        variables: { id: parseInt(id) }
    });
    const [review, setReview] = useState(null);
    const { isOpen, onOpen, onClose } = useModal();

    if (loading || error || !data) {
        return null;
    }

    const { movie } = data;

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
                    data={movie}
                    controls={
                        <WatchlistButton id={parseInt(id)}>
                            Watchlist
                        </WatchlistButton>
                    }
                />
                <Content>
                    <Section label="Overview">
                        <P1>{movie.overview}</P1>
                    </Section>
                    {notEmpty(movie.crew) && (
                        <Section label="Featured Crew">
                            <Crew data={movie.crew} />
                        </Section>
                    )}
                    {notEmpty(movie.cast) && (
                        <Section label="Cast">
                            <Cast data={movie.cast} />
                        </Section>
                    )}
                    {notEmpty(movie.reviews) && (
                        <Section label="Reviews">
                            <Review
                                data={movie.reviews}
                                onClickReview={(event, review) => {
                                    event.stopPropagation();
                                    setReview(review);
                                    onOpen();
                                }}
                            />
                        </Section>
                    )}
                    {notEmpty(movie.similar) && (
                        <SimilarShowsDeck
                            label="Similar movies"
                            data={movie.similar}
                            onCardClick={(event, id) => {
                                event.stopPropagation();
                                history.push(`/movie/${id}`);
                            }}
                        />
                    )}
                </Content>
                <Block marginBottom="scale1000" />
            </Block>
        </>
    );
};
