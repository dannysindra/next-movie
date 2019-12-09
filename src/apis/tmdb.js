const basePath = `https://api.themoviedb.org/3`;
const apiKey = `api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
const region = 'region=US';

const API_MOVIE_SEARCH = `${basePath}/search/movie?query=%QUERY&${apiKey}`;
const API_MOVIE_UPCOMING = `${basePath}/movie/upcoming?${apiKey}&${region}`;
const API_MOVIE_POPULAR = `${basePath}/movie/popular?${apiKey}&${region}`;
const API_MOVIE_NOW_PLAYING = `${basePath}/movie/now_playing?${apiKey}&${region}`;

const API_MOVIE_DETAILS = id =>
    `${basePath}/movie/${id}?${apiKey}&append_to_response=videos,credits,similar`;

const API_TV_POPULAR = `${basePath}/tv/popular?${apiKey}&${region}`;

const API_TV_DETAILS = id =>
    `${basePath}/tv/${id}?${apiKey}&append_to_response=videos,credits,similar`;

export {
    API_MOVIE_SEARCH,
    API_MOVIE_UPCOMING,
    API_MOVIE_POPULAR,
    API_MOVIE_NOW_PLAYING,
    API_MOVIE_DETAILS,
    API_TV_POPULAR,
    API_TV_DETAILS
};
