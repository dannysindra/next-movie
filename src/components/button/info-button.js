import React from 'react';
import { KIND } from 'baseui/button';
import Show from 'baseui/icon/show';

import { Button } from 'next-movie-components';

export const InfoButton = ({ children, ...rest }) => (
    <Button
        startEnhancer={() => <Show size={24} />}
        kind={KIND.secondary}
        {...rest}
    >
        {children}
    </Button>
);
