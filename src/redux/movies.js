import { createAction, createReducer } from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';
import { API_UPCOMING, API_POPULAR } from '../apis';

// constants
const upcoming = 'upcoming';
const popular = 'popular';

// actions
export const requestMovies = createAction('next-movie/REQUEST_MOVIES');
export const receiveMovies = createAction('next-movie/RECEIVE_MOVIES');
export const receiveMoviesError = createAction(
    'next-movie/RECEIVE_MOVIES_ERROR'
);

// thunks
const fetchMovies = ({ namespace, api } = {}) => () => async dispatch => {
    dispatch(requestMovies());

    let response;
    let json;

    try {
        response = await fetch(api);
        json = await response.json();
    } catch (error) {
        dispatch(receiveMoviesError(error.message));
    }

    if (!response.ok) {
        dispatch(receiveMoviesError(response.statusText));
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

// selector
const queryData = state => state.movies.data;
const queryNamespaceMovies = ({ namespace, limit } = {}) => state => {
    const data = queryData(state);

    if (!data || !data[namespace]) {
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
    data: null,
    error: null,
    isFetching: false
};

const movies = createReducer(initialState, {
    [requestMovies]: state => ({ ...state, isFetching: true }),
    [receiveMoviesError]: (state, action) => ({
        ...state,
        error: action.payload,
        isFetching: false
    }),
    [receiveMovies]: (state, action) => {
        const { namespace, results } = action.payload;
        const { entities, result } = normalize(results, [movieSchema]);
        const previousMovies = state.data ? state.data.movies : {};

        return {
            data: {
                ...state.data,
                movies: { ...previousMovies, ...entities.movies },
                [namespace]: result
            },
            error: null,
            isFetching: false
        };
    }
});

export default movies;
