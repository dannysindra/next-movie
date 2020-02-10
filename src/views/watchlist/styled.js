import React from 'react';
import { styled } from 'baseui';
import { Block } from 'baseui/block';

import { CARD_KIND } from 'next-movie-components';

import { CardSkeleton } from '../../components';

export const Root = styled('div', ({ $theme }) => {
    const { breakpoints, sizing } = $theme;

    return {
        paddingTop: sizing.scale1000,
        [`@media screen and (min-width: ${breakpoints.medium}px)`]: {
            paddingTop: sizing.scale1600
        }
    };
});

export const EntrySkeleton = () => (
    <Block display="flex" marginRight="scale200" marginBottom="scale800">
        <CardSkeleton kind={CARD_KIND.thumbnail} />
    </Block>
);

export const Entry = ({ headerImage, title, onClick }) => {
    return (
        <Block
            $style={{ cursor: 'pointer' }}
            display="flex"
            flex={1}
            flexDirection="column"
            marginRight="scale200"
            marginBottom="scale800"
            onClick={onClick}
        >
            <img src={headerImage} alt="watchlist-entry" width="100%" />
            <Block backgroundColor="black" padding="scale600">
                <Block
                    color="white"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                >
                    {title}
                </Block>
            </Block>
        </Block>
    );
};
