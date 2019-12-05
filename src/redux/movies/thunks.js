import {
    API_UPCOMING,
    API_POPULAR,
    API_NOW_PLAYING,
    API_DETAILS
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

export const fetchNowPlayingMovies = fetchMovies({
    namespace: nowPlaying,
    api: API_NOW_PLAYING
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
