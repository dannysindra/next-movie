import { createAction } from '@reduxjs/toolkit';

export const requestMovieById = createAction(
    'next-movie/movies/REQUEST_MOVIE_BY_ID'
);
export const receiveMovieById = createAction(
    'next-movie/movies/RECEIVE_MOVIE_BY_ID'
);
export const receiveMovieByIdError = createAction(
    'next-movie/movies/RECEIVE_MOVIE_BY_ID_ERROR'
);
export const requestMovies = createAction('next-movie/movies/REQUEST_MOVIES');
export const receiveMovies = createAction('next-movie/movies/RECEIVE_MOVIES');
export const receiveMoviesError = createAction(
    'next-movie/movies/RECEIVE_MOVIES_ERROR'
);
