import { schema } from 'normalizr';
import * as utils from '../utils';

const processStrategy = entity => ({
    id: entity.id,
    name: entity.name,
    overview: entity.overview,
    cast: utils.toFeaturedCast(entity.credits),
    crew: utils.toFeaturedCrew(entity.credits),
    reviews: utils.toReviews(entity.reviews),
    similar: utils.toSimilar(processStrategy)(entity.similar),
    genres: utils.toGenres(entity.genres),
    runtime: utils.toRuntime(entity.episode_run_time),
    lastAirDate: utils.toLocaleDate(entity.last_air_date),
    shortLastAirDate: utils.toLocaleShortDate(entity.last_air_date),
    totalSeasons: utils.toTotalSeasons(entity.number_of_seasons),
    totalEpisodes: utils.toTotalEpisodes(entity.number_of_episodes),
    votes: utils.toVote(entity.vote_average),
    posterImgUrl: utils.toPosterImgUrl(entity.poster_path),
    backdropImgUrl: utils.toBackdropImgUrl(entity.backdrop_path),
    videoUrl: utils.toVideoUrl(entity.videos)
});

export const tvSchema = new schema.Entity('tvs', {}, { processStrategy });
