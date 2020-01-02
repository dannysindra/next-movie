import { gql } from 'apollo-boost';

const basePath = `https://api.themoviedb.org/3`;
const apiKey = `api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

export const API_MOVIE_SEARCH = `${basePath}/search/movie?query=%QUERY&${apiKey}`;

export const GET_NOW_PLAYING_MOVIES = gql`
    {
        nowPlayingMovies {
            id
            shortReleaseDate
            posterImgUrl {
                medium
            }
            backdropImgUrl {
                small
            }
        }
    }
`;

export const GET_POPULAR_MOVIES = gql`
    {
        popularMovies {
            id
            title
            votes
            posterImgUrl {
                medium
            }
            backdropImgUrl {
                small
            }
        }
    }
`;

export const GET_UPCOMING_MOVIES = gql`
    {
        upcomingMovies {
            id
            title
            releaseDate
            posterImgUrl {
                medium
                larger
            }
            backdropImgUrl {
                small
                original
            }
        }
    }
`;

export const GET_MOVIE_BY_ID = gql`
    query getMovieById($id: Int!) {
        movie(id: $id) {
            id
            title
            tagline
            overview
            cast {
                creditId
                id
                name
                character
                order
                profileImgUrl
            }
            crew {
                creditId
                id
                name
                department
                job
                profileImgUrl
            }
            reviews {
                id
                author
                content
            }
            similar {
                id
                title
                posterImgUrl {
                    medium
                }
                votes
            }
            genres {
                id
                name
            }
            runtime
            revenue
            releaseDate
            shortReleaseDate
            votes
            posterImgUrl {
                medium
                large
                larger
            }
            backdropImgUrl {
                small
                original
            }
            videoUrl
        }
    }
`;

export const GET_POPULAR_TVS = gql`
    {
        popularTvs {
            id
            name
            votes
            posterImgUrl {
                medium
            }
            backdropImgUrl {
                small
            }
        }
    }
`;

export const GET_TV_BY_ID = gql`
    query getTvById($id: Int!) {
        tv(id: $id) {
            id
            name
            overview
            cast {
                creditId
                id
                name
                character
                order
                profileImgUrl
            }
            crew {
                creditId
                id
                name
                department
                job
                profileImgUrl
            }
            reviews {
                id
                author
                content
            }
            lastAirDate
            shortLastAirDate
            totalSeasons
            similar {
                id
                name
                posterImgUrl {
                    medium
                }
                votes
            }
            genres {
                id
                name
            }
            runtime
            votes
            posterImgUrl {
                medium
                large
                larger
            }
            backdropImgUrl {
                small
                original
            }
            videoUrl
        }
    }
`;
