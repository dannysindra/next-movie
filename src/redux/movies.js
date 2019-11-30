import { createAction, createReducer } from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';
import { API_UPCOMING, API_POPULAR, API_DETAILS } from '../apis';

// constants
const upcoming = 'upcoming';
const popular = 'popular';

// actions
export const requestMovieById = createAction('next-movie/REQUEST_MOVIE_BY_ID');
export const receiveMovieById = createAction('next-movie/RECEIVE_MOVIE_BY_ID');
export const receiveMovieByIdError = createAction(
    'next-movie/RECEIVE_MOVIE_BY_ID_ERROR'
);
export const requestMovies = createAction('next-movie/REQUEST_MOVIES');
export const receiveMovies = createAction('next-movie/RECEIVE_MOVIES');
export const receiveMoviesError = createAction(
    'next-movie/RECEIVE_MOVIES_ERROR'
);

// thunks
const fetchMovies = ({ namespace, api } = {}) => () => async dispatch => {
    dispatch(requestMovies({ namespace }));

    let response;
    let json;

    try {
        response = await fetch(api);
        json = await response.json();
    } catch (error) {
        dispatch(receiveMoviesError({ namespace, error }));
    }

    if (!response.ok) {
        dispatch(
            receiveMoviesError({
                namespace,
                error: new Error(response.statusText)
            })
        );
    } else {
        dispatch(receiveMovies({ ...json, namespace }));
    }
};

export const fetchUpcomingMovies = fetchMovies({
    namespace: upcoming,
    api: API_UPCOMING
});

export const fetchPopularMovies = fetchMovies({
    namespace: popular,
    api: API_POPULAR
});

export const fetchMovieById = id => async dispatch => {
    dispatch(requestMovieById());

    let response;
    let json;

    try {
        response = await fetch(API_DETAILS(id));
        json = await response.json();
    } catch (error) {
        dispatch(receiveMovieByIdError({ error }));
    }

    if (!response.ok) {
        dispatch(
            receiveMovieByIdError({ error: new Error(response.statusText) })
        );
    } else {
        dispatch(receiveMovieById(json));
    }
};

// selector
const queryData = state => state.movies.data;

const queryNamespaceMovies = ({ namespace, limit } = {}) => state => {
    const data = queryData(state);

    if (!data[namespace]) {
        return [];
    }

    return data[namespace]
        .slice(0, limit || data[namespace].length)
        .map(id => data.movies[id]);
};

export const queryUpcomingMovies = queryNamespaceMovies({
    namespace: upcoming,
    limit: 5
});

export const queryPopularMovies = queryNamespaceMovies({ namespace: popular });

export const queryMovieById = id => state => {
    const data = queryData(state);

    if (!data.movies || !data.movies[id]) {
        return null;
    }

    return data.movies[id];
};

// reducer
const movieSchema = new schema.Entity(
    'movies',
    {},
    {
        processStrategy: entity => ({
            id: entity.id,
            title: entity.title,
            tagline: entity.tagline,
            overview: entity.overview,
            runtime: entity.runtime,
            revenue: entity.revenue,
            releaseDate: new Date(entity.release_date).toLocaleDateString(
                'en-US',
                { month: 'long', day: 'numeric' }
            ),
            posterImgUrl: entity.poster_path
                ? `https://image.tmdb.org/t/p/w500${entity.poster_path}`
                : '',
            backdropImgUrl: entity.backdrop_path
                ? `https://image.tmdb.org/t/p/original${entity.backdrop_path}`
                : ''
        })
    }
);

const initialState = {
    data: {},
    errors: {},
    fetching: {}
};

const movies = createReducer(initialState, {
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

export default movies;
