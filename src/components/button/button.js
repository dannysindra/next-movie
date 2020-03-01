import React from 'react';
import { KIND } from 'baseui/button';
import Check from 'baseui/icon/check';
import Plus from 'baseui/icon/plus';
import Show from 'baseui/icon/show';

import { Button } from 'next-movie-components';

export const InfoButton = ({ children, ...rest }) => (
    <Button
        {...rest}
        startEnhancer={() => <Show size={24} />}
        kind={KIND.secondary}
    >
        {children}
    </Button>
);

export const AddToWatchlistButton = ({ children, ...rest }) => (
    <Button
        {...rest}
        startEnhancer={() => <Plus size={24} />}
        kind={KIND.primary}
    >
        {children}
    </Button>
);

export const RemoveFromWatchlistButton = ({ children, ...rest }) => (
    <Button
        {...rest}
        startEnhancer={() => <Check size={24} />}
        kind={KIND.secondary}
    >
        {children}
    </Button>
);
