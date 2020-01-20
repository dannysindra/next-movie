import React from 'react';
import { KIND } from 'baseui/button';
import Plus from 'baseui/icon/plus';

import { Button } from 'next-movie-components';

import { fixtures } from '../../utils';
import { HeaderMovie } from './header-movie';
import { HeaderTv } from './header-tv';

const WatchlistButton = ({ children, ...rest }) => (
    <Button
        startEnhancer={() => <Plus size={24} />}
        kind={KIND.primary}
        {...rest}
    >
        {children}
    </Button>
);

export default {
    title: 'components|Header'
};

export const movie = () => (
    <HeaderMovie
        data={fixtures.movie}
        controls={<WatchlistButton>Watchlist</WatchlistButton>}
    />
);

export const tv = () => (
    <HeaderTv
        data={fixtures.tv}
        controls={<WatchlistButton>Watchlist</WatchlistButton>}
    />
);
