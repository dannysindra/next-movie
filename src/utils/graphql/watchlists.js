import { gql } from 'apollo-boost';
import { useMutation, useQuery } from '@apollo/react-hooks';

const GET_WATCHLIST = gql`
    {
        watchlist {
            id
            results
        }
    }
`;

const ADD_TO_WATCHLIST = gql`
    mutation addToWatchlist($id: Int!) {
        addToWatchlist(id: $id) {
            id
            results
        }
    }
`;

const REMOVE_FROM_WATCHLIST = gql`
    mutation removeFromWatchlist($id: Int!) {
        removeFromWatchlist(id: $id) {
            id
            results
        }
    }
`;

export const useQueryWatchlist = (opts = {}) => {
    return useQuery(GET_WATCHLIST, opts);
};

export const useMutationAddToWatchlist = (opts = {}) => {
    return useMutation(ADD_TO_WATCHLIST, opts);
};

export const useMutationRemoveFromWatchlist = (opts = {}) => {
    return useMutation(REMOVE_FROM_WATCHLIST, opts);
};
