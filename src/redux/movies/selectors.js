import { upcoming, popular, nowPlaying } from './constants';

// Data slice
const queryData = state => state.movies.data;

const queryNamespaceMovies = namespace => state => {
    const data = queryData(state);

    if (!data[namespace]) {
        return [];
    }

    return data[namespace].map(id => data.movies[id]);
};

export const queryUpcomingMovies = queryNamespaceMovies(upcoming);

export const queryPopularMovies = queryNamespaceMovies(popular);

export const queryNowPlayingMovies = queryNamespaceMovies(nowPlaying);

export const queryMovieById = id => state => {
    const data = queryData(state);

    if (!data.movies || !data.movies[id]) {
        return null;
    }

    return data.movies[id];
};

// Fetching slice
const queryFetching = state => state.movies.fetching;

const queryNamespaceFetching = namespace => state => {
    const fetching = queryFetching(state);

    return fetching[namespace] || false;
};

export const queryFetchingUpcomingMovies = queryNamespaceFetching(upcoming);
