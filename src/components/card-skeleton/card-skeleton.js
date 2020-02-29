import React from 'react';
import { Block } from 'baseui/block';
import { string } from 'prop-types';

import { Card, CARD_KIND } from 'next-movie-components';

import { usePulseAnimation } from '../../styles';

const getImagePlaceholderHeight = kind => {
    return kind === CARD_KIND.poster
        ? ['225px', '225px', '300px']
        : ['85px', '85px', '113px'];
};

export const CardSkeleton = ({ kind, ...rest }) => {
    const pulseClass = usePulseAnimation();

    return (
        <Card {...rest} kind={kind}>
            {/* Image placeholder */}
            <Block width="100%" height={getImagePlaceholderHeight(kind)} />

            {/* 1st text-line placeholder */}
            <Block
                backgroundColor="mono700"
                className={pulseClass}
                width="100%"
                height="10px"
            />

            {/* Space between lines */}
            <Block height="10px" />

            {/* 2nd text-line placeholder */}
            <Block
                backgroundColor="mono700"
                className={pulseClass}
                width="70%"
                height="10px"
            />
        </Card>
    );
};

CardSkeleton.propTypes = {
    kind: string.isRequired
};
