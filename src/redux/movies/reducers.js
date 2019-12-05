import { createReducer } from '@reduxjs/toolkit';
import { normalize } from 'normalizr';

import {
    requestMovies,
    receiveMovies,
    receiveMoviesError,
    requestMovieById,
    receiveMovieById,
    receiveMovieByIdError
} from './actions';
import { movieSchema } from './schema';

const initialState = {
    data: {},
    errors: {},
    fetching: {}
};

const moviesReducer = createReducer(initialState, {
    [requestMovies]: (state, { payload }) => {
        const { namespace } = payload;

        return {
            ...state,
            fetching: {
                ...state.fetching,
                [namespace]: true
            }
        };
    },
    [receiveMoviesError]: (state, { payload }) => {
        const { namespace, error } = payload;

        return {
            ...state,
            errors: {
                ...state.errors,
                [namespace]: error
            },
            fetching: {
                ...state.fetching,
                [namespace]: false
            }
        };
    },
    [receiveMovies]: (state, { payload }) => {
        const { namespace, results } = payload;
        const { entities, result } = normalize(results, [movieSchema]);

        return {
            data: {
                ...state.data,
                movies: { ...state.data.movies, ...entities.movies },
                [namespace]: result
            },
            errors: {
                ...state.errors,
                [namespace]: null
            },
            fetching: {
                ...state.fetching,
                [namespace]: false
            }
        };
    },
    [requestMovieById]: state => ({
        ...state,
        fetching: {
            ...state.fetching,
            byId: true
        }
    }),
    [receiveMovieByIdError]: (state, { payload }) => ({
        ...state,
        errors: {
            ...state.errors,
            byId: payload.error
        },
        fetching: {
            ...state.fetching,
            byId: false
        }
    }),
    [receiveMovieById]: (state, { payload }) => {
        const { entities } = normalize(payload, movieSchema);

        return {
            data: {
                ...state.data,
                movies: { ...state.data.movies, ...entities.movies }
            },
            errors: {
                ...state.errors,
                byId: null
            },
            fetching: {
                ...state.fetching,
                byId: false
            }
        };
    }
});

export default moviesReducer;
