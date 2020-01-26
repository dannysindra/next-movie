import React from 'react';

import { useAuth } from '../../utils/auth';
import {
    useQueryWatchlist,
    useMutationAddToWatchlist,
    useMutationRemoveFromWatchlist
} from '../../utils/graphql';

import {
    AddToWatchlistButton as Add,
    RemoveFromWatchlistButton as Remove
} from '../../components';

const AddToWatchlistButton = ({ children, id, ...rest }) => {
    const [addToWatchlist, { loading }] = useMutationAddToWatchlist({
        variables: {
            id: parseInt(id)
        }
    });

    return (
        <Add {...rest} isLoading={loading} onClick={addToWatchlist}>
            {children}
        </Add>
    );
};

const RemoveFromWatchlistButton = ({ children, id, ...rest }) => {
    const [removeFromWatchlist, { loading }] = useMutationRemoveFromWatchlist({
        variables: {
            id: parseInt(id)
        }
    });

    return (
        <Remove {...rest} isLoading={loading} onClick={removeFromWatchlist}>
            {children}
        </Remove>
    );
};

export const WatchlistButton = ({ id, children, ...rest }) => {
    const { isLoggedIn } = useAuth();
    const { data, error } = useQueryWatchlist({ skip: !isLoggedIn });

    // Do not render anything if user has not logged in, or there is an error
    if (!isLoggedIn || !data || error) {
        return null;
    }

    return data.watchlist.results.includes(id) ? (
        <RemoveFromWatchlistButton {...rest} id={id}>
            {children}
        </RemoveFromWatchlistButton>
    ) : (
        <AddToWatchlistButton {...rest} id={id}>
            {children}
        </AddToWatchlistButton>
    );
};
