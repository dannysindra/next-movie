import React from 'react';
import Show from 'baseui/icon/show';

import { Button } from 'next-movie-components';

export const InfoButton = ({ children, ...rest }) => (
    <Button
        startEnhancer={() => <Show size={24} />}
        variant="secondary"
        {...rest}
    >
        {children}
    </Button>
);
