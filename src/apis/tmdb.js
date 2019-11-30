const getStringDate = arg => {
    let date = arg || new Date();

    return date
        .toLocaleString('en-us', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        })
        .replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');
};

const basePath = `https://api.themoviedb.org/3`;
const apiKey = `api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
const language = `language=en-US`;
const region = 'region=US';
const releaseGte = `release_date.gte=${getStringDate(
    new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
)}`;
const releaseLte = `release_date.lte=${getStringDate()}`;
const sortPopularityDesc = 'sort_by=popularity.desc';
const includeAdult = 'include_adult=false';
const includeVideo = 'include_video=false';
const releaseType = 'with_release_type=3|2';

const API_SEARCH = `${basePath}/search/movie?query=%QUERY&${apiKey}`;
const API_UPCOMING = `${basePath}/movie/upcoming?${apiKey}&${region}`;
const API_POPULAR = `${basePath}/discover/movie?${apiKey}&${language}&${region}&${releaseGte}&${releaseLte}&${sortPopularityDesc}&${includeAdult}&${includeVideo}&${releaseType}`;
const API_DETAILS = id =>
    `${basePath}/movie/${id}?${apiKey}&append_to_response=videos,releases`;

export { API_SEARCH, API_UPCOMING, API_POPULAR, API_DETAILS };
