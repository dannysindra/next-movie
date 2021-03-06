import React from 'react';
import { styled } from 'baseui';
import { Block } from 'baseui/block';
import { ReactComponent as TmdbLogo } from './tmdb.svg';

const StyledFooter = styled('footer', ({ $theme }) => {
    const { colors, sizing } = $theme;

    return {
        backgroundColor: colors.primary800,
        marginTop: sizing.scale1400,
        paddingTop: sizing.scale1200,
        paddingBottom: sizing.scale1200,
        color: colors.mono500,
        textAlign: 'center'
    };
});

const StyledLink = styled('a', ({ $theme }) => ({
    color: $theme.colors.mono500
}));

export const Footer = () => (
    <StyledFooter>
        <StyledLink href="https://www.themoviedb.org/" target="_blank">
            <TmdbLogo title="powered by TMDB" width="6em" />
        </StyledLink>
        <Block height="scale600" />
        &copy; Copyright{` ${new Date().getFullYear()} `}
        <StyledLink href="https://github.com/dannysindra" target="_blank">
            Danny Sindra
        </StyledLink>
    </StyledFooter>
);
