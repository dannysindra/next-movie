import { configureStore, combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './movies/index';
import tvsReducer from './tvs/index';

export {
    fetchUpcomingMovies,
    fetchPopularMovies,
    fetchNowPlayingMovies,
    fetchMovieById,
    queryUpcomingMovies,
    queryPopularMovies,
    queryNowPlayingMovies,
    queryMovieById
} from './movies/index';

export {
    fetchPopularTvs,
    fetchTvById,
    queryPopularTvs,
    queryTvById
} from './tvs/index';

const rootReducer = combineReducers({
    movies: moviesReducer,
    tvs: tvsReducer
});

export const store = configureStore({
    reducer: rootReducer
});
