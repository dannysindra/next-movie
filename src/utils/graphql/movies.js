import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_NOW_PLAYING_MOVIES = gql`
    {
        nowPlayingMovies {
            id
            title
            votes
            voteCount
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

const GET_POPULAR_MOVIES = gql`
    {
        popularMovies {
            id
            title
            votes
            voteCount
            posterImgUrl {
                medium
            }
            backdropImgUrl {
                small
            }
        }
    }
`;

const GET_UPCOMING_MOVIES = gql`
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

const GET_MOVIE_BY_ID = gql`
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
                voteCount
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
            voteCount
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

export const useQueryNowPlayingMovies = (opts = {}) =>
    useQuery(GET_NOW_PLAYING_MOVIES, opts);

export const useQueryUpcomingMovies = (opts = {}) =>
    useQuery(GET_UPCOMING_MOVIES, opts);

export const useQueryPopularMovies = (opts = {}) =>
    useQuery(GET_POPULAR_MOVIES, opts);

export const useQueryMovieById = (opts = {}) => useQuery(GET_MOVIE_BY_ID, opts);
