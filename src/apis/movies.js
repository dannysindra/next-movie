const basePath = `https://api.themoviedb.org/3`;
const apiKey = `api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

export const API_MOVIE_SEARCH = `${basePath}/search/movie?query=%QUERY&${apiKey}`;
