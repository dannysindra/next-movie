import { schema } from 'normalizr';

import * as utils from '../utils';

const processStrategy = entity => ({
    id: entity.id,
    title: entity.title,
    tagline: entity.tagline,
    overview: entity.overview,
    cast: utils.toFeaturedCast(entity.credits),
    similar: utils.toSimilar(processStrategy)(entity.similar),
    genres: utils.toGenres(entity.genres),
    runtime: utils.toRuntime(entity.runtime),
    revenue: utils.toRevenue(entity.revenue),
    releaseDate: utils.toLocaleDate(entity.release_date),
    shortReleaseDate: utils.toLocaleShortDate(entity.release_date),
    votes: utils.toVote(entity.vote_average),
    posterImgUrl: utils.toPosterImgUrl(entity.poster_path),
    thumbnailImgUrl: utils.toThumbnailImgUrl(entity.backdrop_path),
    backdropImgUrl: utils.toBackdropImgUrl(entity.backdrop_path),
    videoUrl: utils.toVideoUrl(entity.videos)
});

export const movieSchema = new schema.Entity('movies', {}, { processStrategy });
