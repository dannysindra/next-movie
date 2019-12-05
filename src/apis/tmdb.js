const basePath = `https://api.themoviedb.org/3`;
const apiKey = `api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
const region = 'region=US';

const API_SEARCH = `${basePath}/search/movie?query=%QUERY&${apiKey}`;
const API_UPCOMING = `${basePath}/movie/upcoming?${apiKey}&${region}`;
const API_POPULAR = `${basePath}/movie/popular?${apiKey}&${region}`;
const API_NOW_PLAYING = `${basePath}/movie/now_playing?${apiKey}&${region}`;

const API_DETAILS = id =>
    `${basePath}/movie/${id}?${apiKey}&append_to_response=videos,similar`;

export { API_SEARCH, API_UPCOMING, API_POPULAR, API_NOW_PLAYING, API_DETAILS };
