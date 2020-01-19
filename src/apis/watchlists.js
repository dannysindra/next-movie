import { gql } from 'apollo-boost';

export const GET_WATCHLIST = gql`
    {
        watchlist {
            results
        }
    }
`;
