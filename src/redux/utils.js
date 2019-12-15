// internal
const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
});

// common
export const toGenres = genres => genres || [];

export const toRuntime = runtime => (runtime ? `${runtime} minutes` : 'N/A');

export const toVote = vote => (vote && vote > 0 ? `${vote} / 10` : 'N/A');

export const toProfileImgUrl = profilePath =>
    profilePath ? `https://image.tmdb.org/t/p/w185${profilePath}` : '';

export const toThumbnailImgUrl = backdropPath =>
    backdropPath ? `https://image.tmdb.org/t/p/w300${backdropPath}` : '';

export const toPosterImgUrl = posterPath =>
    posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : '';

export const toBackdropImgUrl = backdropPath =>
    backdropPath ? `https://image.tmdb.org/t/p/original${backdropPath}` : '';

export const toSimilar = processStrategy => similar =>
    !similar || !similar.results
        ? []
        : similar.results.map(result => processStrategy(result));

export const toLocaleDate = date =>
    !date
        ? 'N/A'
        : new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
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

    console.log('crew', filtered);

    return Object.values(filtered)
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map(crew => ({
            creditId: crew.credit_id,
            id: crew.id,
            name: crew.name,
            department: crew.department,
            job: crew.job,
            profileImgUrl: toProfileImgUrl(crew.profile_path)
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
        profileImgUrl: toProfileImgUrl(cast.profile_path)
    }));
};

// movies
export const toRevenue = revenue =>
    revenue && revenue > 0 ? currencyFormatter.format(revenue) : 'N/A';

// tv
export const toTotalSeasons = seasons =>
    seasons ? `${seasons} season(s)` : 'N/A';

export const toTotalEpisodes = episodes =>
    episodes ? `${episodes} episode(s)` : 'N/A';
