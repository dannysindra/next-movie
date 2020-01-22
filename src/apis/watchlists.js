import { gql } from 'apollo-boost';

export const GET_WATCHLIST = gql`
    {
        watchlist {
            id
            results
        }
    }
`;

export const ADD_TO_WATCHLIST = gql`
    mutation addToWatchlist($id: Int!) {
        addToWatchlist(id: $id) {
            id
            results
        }
    }
`;

export const REMOVE_FROM_WATCHLIST = gql`
    mutation removeFromWatchlist($id: Int!) {
        removeFromWatchlist(id: $id) {
            id
            results
        }
    }
`;
