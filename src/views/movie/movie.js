import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Block } from 'baseui/block';

import { Content, Section, P1 } from 'next-movie-components';

import { useModal } from '../../hooks';
import { useQueryMovieById } from '../../utils/graphql';

import { Cast, Crew, HeaderMovie, Review, ReviewModal } from '../../components';
import { WatchlistButton } from '../button';
import { SimilarShowsDeck } from '../decks';

const notEmpty = data => data && data.length > 0;

export const Movie = () => {
    const history = useHistory();
    const { id } = useParams();
    const { loading, error, data } = useQueryMovieById({
        variables: {
            id: parseInt(id)
        }
    });
    const [review, setReview] = useState(null);
    const { isOpen, onOpen, onClose } = useModal();

    if (error) {
        return null;
    }

    const movie = data ? data.movie : null;

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
                    loading={loading}
                    data={movie}
                    controls={
                        <WatchlistButton id={parseInt(id)}>
                            Watchlist
                        </WatchlistButton>
                    }
                />
                {movie && (
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
                )}
                <Block marginBottom="scale1000" />
            </Block>
        </>
    );
};
