import {
    API_MOVIE_UPCOMING,
    API_MOVIE_POPULAR,
    API_MOVIE_NOW_PLAYING,
    API_MOVIE_DETAILS
} from '../../apis';

import { upcoming, popular, nowPlaying } from './constants';
import {
    requestMovies,
    receiveMovies,
    receiveMoviesError,
    requestMovieById,
    receiveMovieById,
    receiveMovieByIdError
} from './actions';
import { queryFetchingUpcomingMovies, queryUpcomingMovies } from './selectors';

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

export const fetchPopularMovies = fetchMovies({
    namespace: popular,
    api: API_MOVIE_POPULAR
});

export const fetchNowPlayingMovies = fetchMovies({
    namespace: nowPlaying,
    api: API_MOVIE_NOW_PLAYING
});

export const fetchUpcomingMovies = () => async (dispatch, getState) => {
    const globalState = getState();
    const isFetching = queryFetchingUpcomingMovies(globalState);
    const hasData = queryUpcomingMovies(globalState).length > 0;

    if (isFetching || hasData) {
        return;
    }

    dispatch(requestMovies({ namespace: upcoming }));

    let response;
    let json;

    try {
        response = await fetch(API_MOVIE_UPCOMING);
        json = await response.json();
    } catch (error) {
        dispatch(receiveMoviesError({ namespace: upcoming, error }));
    }

    if (!response.ok) {
        dispatch(
            receiveMoviesError({
                namespace: upcoming,
                error: new Error(response.statusText)
            })
        );
    } else {
        dispatch(receiveMovies({ ...json, namespace: upcoming }));
    }
};

export const fetchMovieById = id => async dispatch => {
    dispatch(requestMovieById());

    let response;
    let json;

    try {
        response = await fetch(API_MOVIE_DETAILS(id));
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
