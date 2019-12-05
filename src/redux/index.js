import { configureStore, combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './movies/index';

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

const rootReducer = combineReducers({
    movies: moviesReducer
});

export const store = configureStore({
    reducer: rootReducer
});
