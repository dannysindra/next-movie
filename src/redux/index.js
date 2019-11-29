import { configureStore, combineReducers } from '@reduxjs/toolkit';
import movieReducer from './movies';

export {
    fetchUpcomingMovies,
    fetchPopularMovies,
    queryUpcomingMovies,
    queryPopularMovies
} from './movies';

const rootReducer = combineReducers({
    movies: movieReducer
});

export const store = configureStore({
    reducer: rootReducer
});
