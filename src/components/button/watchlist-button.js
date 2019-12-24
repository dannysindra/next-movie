import React from 'react';
import { KIND } from 'baseui/button';
import Plus from 'baseui/icon/plus';

import { Button } from 'next-movie-components';

export const WatchlistButton = ({ children, ...rest }) => (
    <Button
        startEnhancer={() => <Plus size={24} />}
        kind={KIND.primary}
        {...rest}
    >
        {children}
    </Button>
);
