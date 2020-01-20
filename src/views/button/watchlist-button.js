import React from 'react';
import { KIND } from 'baseui/button';
import Plus from 'baseui/icon/plus';
import Minus from 'baseui/icon/check-indeterminate';
import { useQuery } from '@apollo/react-hooks';

import { Button } from 'next-movie-components';

import { GET_WATCHLIST } from '../../apis';
import { Firebase } from '../../utils';

const AddToWatchlistButton = ({ children, ...rest }) => (
    <Button
        startEnhancer={() => <Plus size={24} />}
        kind={KIND.primary}
        {...rest}
    >
        {children}
    </Button>
);

const RemoveFromWatchlistButton = ({ children, ...rest }) => (
    <Button
        startEnhancer={() => <Minus size={24} />}
        kind={KIND.secondary}
        {...rest}
    >
        {children}
    </Button>
);

export const WatchlistButton = ({ id, children, ...rest }) => {
    const { isLoggedIn } = Firebase.useFirebaseAuth();
    const { data, error } = useQuery(GET_WATCHLIST, { skip: !isLoggedIn });

    // Do not render anything if user has not logged in, or there is an error
    if (!isLoggedIn || !data || error) {
        return null;
    }

    if (data.watchlist.results.includes(id)) {
        return (
            <RemoveFromWatchlistButton
                {...rest}
                // onClick should perform mutation
            >
                {children}
            </RemoveFromWatchlistButton>
        );
    }

    return (
        <AddToWatchlistButton
            {...rest}
            // onClick should perform mutation
        >
            {children}
        </AddToWatchlistButton>
    );
};
