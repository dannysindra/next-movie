import React from 'react';
import { Block } from 'baseui/block';

// constants
export const KIND = {
    movie: 'movie',
    tv: 'tv'
};

// shared components
export const Header = ({ children }) => (
    <Block
        as="h2"
        color="colorSecondary"
        marginBottom="scale400"
        $style={({ $theme }) => ({
            ...$theme.typography.font550,
            fontWeight: 'bold'
        })}
    >
        {children}
    </Block>
);

export const Meta = ({ title, children }) => (
    <>
        <Block
            color="white"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
        >
            {title}
        </Block>
        <Block>{children}</Block>
    </>
);
