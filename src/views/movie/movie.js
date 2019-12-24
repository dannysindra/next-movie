import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Block } from 'baseui/block';

import { Content, Section, P1 } from 'next-movie-components';

import {
    Cast,
    Crew,
    HeaderMovie,
    Review,
    ReviewModal,
    WatchlistButton
} from '../../components';
import { useModal } from '../../hooks';
import { SimilarShowsDeck } from '../decks';

import { useFetchMovieDetails } from './hooks';

const notEmpty = data => data && data.length > 0;

export const Movie = () => {
    const history = useHistory();
    const movie = useFetchMovieDetails();
    const [review, setReview] = useState(null);
    const { isOpen, onOpen, onClose } = useModal();

    if (!movie) {
        return null;
    }

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
                    controls={<WatchlistButton>Watchlist</WatchlistButton>}
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
                    <SimilarShowsDeck
                        label="Similar movies"
                        data={movie.similar}
                        onCardClick={(event, id) => {
                            event.stopPropagation();
                            history.push(`/movie/${id}`);
                        }}
                    />
                </Content>
                <Block marginBottom="scale1000" />
            </Block>
        </>
    );
};
