import { schema } from 'normalizr';

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
});

const toGenres = genres => genres || [];
const toRuntime = runtime => (runtime ? `${runtime} minutes` : 'N/A');
const toRevenue = revenue =>
    revenue && revenue > 0 ? currencyFormatter.format(revenue) : 'N/A';
const toVote = vote => (vote && vote > 0 ? `${vote} / 10` : 'N/A');
const toPosterImgUrl = posterPath =>
    posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : '';
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
const toShortLocaleDate = date =>
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
    title: entity.title,
    tagline: entity.tagline,
    overview: entity.overview,
    similar: toSimilar(entity.similar),
    genres: toGenres(entity.genres),
    runtime: toRuntime(entity.runtime),
    revenue: toRevenue(entity.revenue),
    releaseDate: toLocaleDate(entity.release_date),
    shortReleaseDate: toShortLocaleDate(entity.release_date),
    votes: toVote(entity.vote_average),
    posterImgUrl: toPosterImgUrl(entity.poster_path),
    backdropImgUrl: toBackdropImgUrl(entity.backdrop_path),
    videoUrl: toVideoUrl(entity.videos)
});

export const movieSchema = new schema.Entity('movies', {}, { processStrategy });
