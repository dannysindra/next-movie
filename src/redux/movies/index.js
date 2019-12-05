import moviesReducer from './reducers';

export default moviesReducer;

export {
    requestMovieById,
    receiveMovieById,
    receiveMovieByIdError,
    requestMovies,
    receiveMovies,
    receiveMoviesError
} from './actions';

export {
    queryMovieById,
    queryPopularMovies,
    queryUpcomingMovies,
    queryNowPlayingMovies
} from './selectors';

export {
    fetchMovieById,
    fetchPopularMovies,
    fetchUpcomingMovies,
    fetchNowPlayingMovies
} from './thunks';
