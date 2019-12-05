import React from 'react';
import Plus from 'baseui/icon/plus';

import { Button } from 'next-movie-components';

export const WatchlistButton = ({ children, ...rest }) => (
    <Button
        startEnhancer={() => <Plus size={24} />}
        variant="primary"
        {...rest}
    >
        {children}
    </Button>
);
