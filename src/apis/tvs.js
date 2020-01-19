import { gql } from 'apollo-boost';

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
