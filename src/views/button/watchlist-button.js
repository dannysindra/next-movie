import React from 'react';
import { KIND } from 'baseui/button';
import Plus from 'baseui/icon/plus';
import Minus from 'baseui/icon/check-indeterminate';

import { Button } from 'next-movie-components';

import { useAuth } from '../../utils/auth';
import {
    useQueryWatchlist,
    useMutationAddToWatchlist,
    useMutationRemoveFromWatchlist
} from '../../utils/graphql';

const AddToWatchlistButton = ({ children, id, ...rest }) => {
    const [addToWatchlist, { loading }] = useMutationAddToWatchlist({
        variables: {
            id: parseInt(id)
        }
    });

    return (
        <Button
            {...rest}
            startEnhancer={() => <Plus size={24} />}
            kind={KIND.primary}
            isLoading={loading}
            onClick={() => {
                addToWatchlist();
            }}
        >
            {children}
        </Button>
    );
};

const RemoveFromWatchlistButton = ({ children, id, ...rest }) => {
    const [removeFromWatchlist, { loading }] = useMutationRemoveFromWatchlist({
        variables: {
            id: parseInt(id)
        }
    });

    return (
        <Button
            {...rest}
            startEnhancer={() => <Minus size={24} />}
            kind={KIND.secondary}
            isLoading={loading}
            onClick={() => {
                removeFromWatchlist();
            }}
        >
            {children}
        </Button>
    );
};

export const WatchlistButton = ({ id, children, ...rest }) => {
    const { isLoggedIn } = useAuth();
    const { data, error } = useQueryWatchlist({ skip: !isLoggedIn });

    // Do not render anything if user has not logged in, or there is an error
    if (!isLoggedIn || !data || error) {
        return null;
    }

    if (data.watchlist.results.includes(id)) {
        return (
            <RemoveFromWatchlistButton {...rest} id={id}>
                {children}
            </RemoveFromWatchlistButton>
        );
    }

    return (
        <AddToWatchlistButton {...rest} id={id}>
            {children}
        </AddToWatchlistButton>
    );
};
