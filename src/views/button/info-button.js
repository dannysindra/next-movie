import React from 'react';
import { KIND } from 'baseui/button';
import Show from 'baseui/icon/show';
import { useHistory } from 'react-router-dom';

import { Button } from 'next-movie-components';

export const InfoButton = ({ id, children, kind, ...rest }) => {
    const history = useHistory();

    return (
        <Button
            {...rest}
            startEnhancer={() => <Show size={24} />}
            kind={KIND.secondary}
            onClick={event => {
                event.stopPropagation();
                history.push(`/${kind}/${id}`);
            }}
        >
            {children}
        </Button>
    );
};
