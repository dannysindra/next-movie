import { schema } from 'normalizr';

const toGenres = genres => genres || [];
const toRuntime = runtime =>
    runtime && runtime.length > 0 ? `${runtime[0]} minutes` : 'N/A';
const toVote = vote => (vote && vote > 0 ? `${vote} / 10` : 'N/A');
const toTotalSeasons = seasons => (seasons ? `${seasons} season(s)` : 'N/A');
const toTotalEpisodes = episodes =>
    episodes ? `${episodes} episode(s)` : 'N/A';
const toPosterImgUrl = posterPath =>
    posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : '';
const toThumbnailImgUrl = backdropPath =>
    backdropPath ? `https://image.tmdb.org/t/p/w300${backdropPath}` : '';
const toBackdropImgUrl = backdropPath =>
    backdropPath ? `https://image.tmdb.org/t/p/original${backdropPath}` : '';
const toSimilar = similar =>
    !similar || !similar.results
        ? []
        : similar.results.map(result => processStrategy(result));
const toLocaleDate = date =>
    !date
        ? 'N/A'
        : new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
          });
const toLocaleShortDate = date =>
    !date
        ? 'N/A'
        : new Date(date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric'
          });
const toVideoUrl = videos => {
    if (!videos || !videos.results || videos.results.length === 0) {
        return null;
    }

    let video = videos.results[0]; // fallback, regardless of the video type

    for (let i = 0; i < videos.results.length; i++) {
        if (videos.results[i].type === 'Trailer') {
            video = videos.results[i];
            break;
        }
    }

    if (video.site === 'YouTube') {
        return `https://www.youtube.com/watch?v=${video.key}`;
    } else if (video.site === 'Vimeo') {
        return `https://vimeo.com/${video.key}`;
    }

    return '';
};

const processStrategy = entity => ({
    id: entity.id,
    name: entity.name,
    overview: entity.overview,
    similar: toSimilar(entity.similar),
    genres: toGenres(entity.genres),
    runtime: toRuntime(entity.episode_run_time),
    episodeRuntime: toRuntime(entity.episode_run_time),
    lastAirDate: toLocaleDate(entity.last_air_date),
    shortLastAirDate: toLocaleShortDate(entity.last_air_date),
    totalSeasons: toTotalSeasons(entity.number_of_seasons),
    totalEpisodes: toTotalEpisodes(entity.number_of_episodes),
    votes: toVote(entity.vote_average),
    posterImgUrl: toPosterImgUrl(entity.poster_path),
    thumbnailImgUrl: toThumbnailImgUrl(entity.backdrop_path),
    backdropImgUrl: toBackdropImgUrl(entity.backdrop_path),
    videoUrl: toVideoUrl(entity.videos)
});

export const tvSchema = new schema.Entity('tvs', {}, { processStrategy });
