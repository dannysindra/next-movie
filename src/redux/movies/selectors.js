import { upcoming, popular, nowPlaying } from './constants';

const LIMIT_UPCOMING = 5;

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
    limit: LIMIT_UPCOMING
});

export const queryPopularMovies = queryNamespaceMovies({ namespace: popular });

export const queryNowPlayingMovies = queryNamespaceMovies({
    namespace: nowPlaying
});

export const queryMovieById = id => state => {
    const data = queryData(state);

    if (!data.movies || !data.movies[id]) {
        return null;
    }

    return data.movies[id];
};
