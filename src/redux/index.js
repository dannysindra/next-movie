import { configureStore, combineReducers } from '@reduxjs/toolkit';
import movieReducer from './movies';

export {
    fetchUpcomingMovies,
    fetchPopularMovies,
    fetchMovieById,
    queryUpcomingMovies,
    queryPopularMovies,
    queryMovieById
} from './movies';

const rootReducer = combineReducers({
    movies: movieReducer
});

export const store = configureStore({
    reducer: rootReducer
});
