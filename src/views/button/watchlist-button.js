import React from 'react';
import { KIND } from 'baseui/button';
import Plus from 'baseui/icon/plus';
import Minus from 'baseui/icon/check-indeterminate';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Button } from 'next-movie-components';

import {
    GET_WATCHLIST,
    ADD_TO_WATCHLIST,
    REMOVE_FROM_WATCHLIST
} from '../../apis';
import { Firebase } from '../../utils';

const AddToWatchlistButton = ({ children, id, ...rest }) => {
    const [addToWatchlist, { loading }] = useMutation(ADD_TO_WATCHLIST);

    return (
        <Button
            {...rest}
            startEnhancer={() => <Plus size={24} />}
            kind={KIND.primary}
            isLoading={loading}
            onClick={() => {
                addToWatchlist({
                    variables: {
                        id
                    }
                });
            }}
        >
            {children}
        </Button>
    );
};

const RemoveFromWatchlistButton = ({ children, id, ...rest }) => {
    const [removeFromWatchlist, { loading }] = useMutation(
        REMOVE_FROM_WATCHLIST,
        {
            variables: {
                id
            }
        }
    );

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
    const { isLoggedIn } = Firebase.useFirebaseAuth();
    const { data, error } = useQuery(GET_WATCHLIST, { skip: !isLoggedIn });

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
