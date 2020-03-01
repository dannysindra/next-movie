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

const GET_WATCHLIST_ENTRIES = gql`
    {
        watchlistEntries {
            id
            results {
                id
                title
                backdropImgUrl {
                    small
                }
            }
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

export const useQueryWatchlist = (opts = {}) => useQuery(GET_WATCHLIST, opts);

export const useQueryWatchlistEntries = (opts = {}) =>
    useQuery(GET_WATCHLIST_ENTRIES, opts);

export const useMutationAddToWatchlist = (opts = {}) =>
    useMutation(ADD_TO_WATCHLIST, opts);

export const useMutationRemoveFromWatchlist = (opts = {}) =>
    useMutation(REMOVE_FROM_WATCHLIST, opts);
