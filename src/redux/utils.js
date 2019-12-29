// internal
const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
});

const IMG_URL = 'https://image.tmdb.org/t/p/';

// common
export const toGenres = genres => genres || [];

export const toRuntime = runtime => (runtime ? `${runtime} minutes` : 'N/A');

export const toVote = vote => (vote && vote > 0 ? `${vote} / 10` : 'N/A');

export const toProfileImgUrl = profilePath =>
    !profilePath
        ? ''
        : {
              small: `${IMG_URL}w45${profilePath}`,
              medium: `${IMG_URL}w185${profilePath}`,
              large: `${IMG_URL}h632${profilePath}`,
              original: `${IMG_URL}original${profilePath}`
          };

export const toPosterImgUrl = posterPath =>
    !posterPath
        ? ''
        : {
              tiny: `${IMG_URL}w92${posterPath}`,
              smaller: `${IMG_URL}w154${posterPath}`,
              small: `${IMG_URL}w185${posterPath}`,
              medium: `${IMG_URL}w342${posterPath}`,
              large: `${IMG_URL}w500${posterPath}`,
              larger: `${IMG_URL}w780${posterPath}`,
              original: `${IMG_URL}original${posterPath}`
          };

export const toBackdropImgUrl = backdropPath =>
    !backdropPath
        ? ''
        : {
              small: `${IMG_URL}w300${backdropPath}`,
              medium: `${IMG_URL}w780${backdropPath}`,
              large: `${IMG_URL}w1280${backdropPath}`,
              original: `${IMG_URL}original${backdropPath}`
          };

export const toSimilar = processStrategy => similar =>
    !similar || !similar.results
        ? []
        : similar.results.map(result => processStrategy(result));

export const toLocaleDate = date =>
    !date
        ? 'N/A'
        : new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
          });

export const toLocaleShortDate = date =>
    !date
        ? 'N/A'
        : new Date(date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric'
          });

export const toVideoUrl = videos => {
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

export const toFeaturedCrew = credits => {
    if (!credits || !credits.crew || credits.crew.length === 0) {
        return [];
    }

    const featured = {
        Director: 0,
        Writer: 1,
        Story: 2,
        Screenplay: 3
    };

    const filtered = credits.crew
        .filter(person => featured[person.job] !== undefined)
        .reduce((res, person) => {
            return {
                ...res,
                [person.id]: {
                    ...person,
                    job: res[person.id]
                        ? `${res[person.id].job}, ${person.job}`
                        : person.job,
                    sortOrder: res[person.id]
                        ? featured[person.job] < res[person.id].sortOrder
                            ? featured[person.job]
                            : res[person.id].sortOrder
                        : featured[person.job]
                }
            };
        }, {});

    return Object.values(filtered)
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map(crew => ({
            creditId: crew.credit_id,
            id: crew.id,
            name: crew.name,
            department: crew.department,
            job: crew.job,
            profileImgUrl: toProfileImgUrl(crew.profile_path).medium
        }));
};

export const toFeaturedCast = credits => {
    if (!credits || !credits.cast || credits.cast.length === 0) {
        return [];
    }

    return credits.cast.map(cast => ({
        creditId: cast.credit_id,
        id: cast.id,
        name: cast.name,
        character: cast.character,
        order: cast.order,
        profileImgUrl: toProfileImgUrl(cast.profile_path).medium
    }));
};

export const toReviews = reviews => {
    if (!reviews || !reviews.results || reviews.results.length === 0) {
        return [];
    }

    return reviews.results;
};

// movies
export const toRevenue = revenue =>
    revenue && revenue > 0 ? currencyFormatter.format(revenue) : 'N/A';

// tv
export const toTotalSeasons = seasons =>
    seasons ? `${seasons} season(s)` : 'N/A';

export const toTotalEpisodes = episodes =>
    episodes ? `${episodes} episode(s)` : 'N/A';
